'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

const GridSelector = () => {
  let grid = 4
  const params = useSearchParams()
  const gridParam = Number(params.get('grid'))
  const path = usePathname()
  const { replace } = useRouter()
  const toggleGrid = value => {
    const newParams = new URLSearchParams(params)
    newParams.set('grid', value)
    replace(`${path}?${newParams.toString()}`)
  }

  if (gridParam >= 2 && gridParam <= 4) {
    grid = gridParam
  } else {
    grid = 4
  }

  return (
    <ul className="grid-view">
      <button
        aria-label="button"
        type="button"
        className={grid === 3 ? 'active' : ''}
        onClick={() => toggleGrid(3)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
        >
          <g clipPath="url(#clip0_1610_1442)">
            <rect width="5.10638" height="5.10638" rx="2.55319" />
            <rect y="7.44678" width="5.10638" height="5.10638" rx="2.55319" />
            <rect y="14.8937" width="5.10638" height="5.10638" rx="2.55319" />
            <rect x="7.44678" width="5.10638" height="5.10638" rx="2.55319" />
            <rect
              x="7.44678"
              y="7.44678"
              width="5.10638"
              height="5.10638"
              rx="2.55319"
            />
            <rect
              x="7.44678"
              y="14.8937"
              width="5.10638"
              height="5.10638"
              rx="2.55319"
            />
            <rect x="14.8936" width="5.10638" height="5.10638" rx="2.55319" />
            <rect
              x="14.8936"
              y="7.44678"
              width="5.10638"
              height="5.10638"
              rx="2.55319"
            />
            <rect
              x="14.8936"
              y="14.8937"
              width="5.10638"
              height="5.10638"
              rx="2.55319"
            />
          </g>
        </svg>
      </button>
      <button
        aria-label="button"
        type="button"
        className={grid === 4 ? 'active' : ''}
        onClick={() => toggleGrid(4)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
        >
          <g clipPath="url(#clip0_1610_1453)">
            <rect width="3.64741" height="3.64741" rx="1.8237" />
            <rect y="8.17627" width="3.64741" height="3.64741" rx="1.8237" />
            <rect y={16} width="3.64741" height="3.64741" rx="1.8237" />
            <rect x="5.31909" width="3.64741" height="3.64741" rx="1.8237" />
            <rect
              x="5.31909"
              y="8.17627"
              width="3.64741"
              height="3.64741"
              rx="1.8237"
            />
            <rect
              x="5.31909"
              y={16}
              width="3.64741"
              height="3.64741"
              rx="1.8237"
            />
            <rect x="10.6382" width="3.64741" height="3.64741" rx="1.8237" />
            <rect x="16.3525" width="3.64741" height="3.64741" rx="1.8237" />
            <rect
              x="10.6384"
              y="8.17627"
              width="3.64741"
              height="3.64741"
              rx="1.8237"
            />
            <rect
              x="16.3525"
              y="8.17627"
              width="3.64741"
              height="3.64741"
              rx="1.8237"
            />
            <rect
              x="10.6382"
              y={16}
              width="3.64741"
              height="3.64741"
              rx="1.8237"
            />
            <rect
              x="16.3525"
              y={16}
              width="3.64741"
              height="3.64741"
              rx="1.8237"
            />
          </g>
        </svg>
      </button>
    </ul>
  )
}

export { GridSelector }
