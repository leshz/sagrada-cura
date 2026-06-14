import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

/**
 * Guard test: `src/config/feature-flags.ts` is a SERVER-ONLY module
 * (`SHOP_ENABLED` must never be exposed to the client bundle). No file
 * marked `'use client'` may import `@/config/feature-flags` (or a relative
 * path to it). The client Header/Menu.Right receive only a derived
 * `shopEnabled` boolean PROP from the server layout — never the helper
 * itself.
 */

const SRC_DIR = join(__dirname, '../../../src')
const TARGET_IMPORT_PATTERNS = [
  /@\/config\/feature-flags/,
  /['"](\.\.\/)+config\/feature-flags['"]/,
  /['"]\.\/feature-flags['"]/,
]

const collectFiles = (dir: string, acc: string[] = []): string[] => {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry)
    const stats = statSync(fullPath)
    if (stats.isDirectory()) {
      collectFiles(fullPath, acc)
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry)) {
      acc.push(fullPath)
    }
  }
  return acc
}

describe('feature-flags server-only invariant', () => {
  it('no "use client" file imports @/config/feature-flags', () => {
    const files = collectFiles(SRC_DIR)
    const offenders: string[] = []

    for (const file of files) {
      const content = readFileSync(file, 'utf-8')
      const isClientComponent = /^['"]use client['"]/.test(content.trimStart())
      if (!isClientComponent) continue

      const importsFlag = TARGET_IMPORT_PATTERNS.some(pattern => pattern.test(content))
      if (importsFlag) {
        offenders.push(file)
      }
    }

    expect(offenders).toEqual([])
  })
})
