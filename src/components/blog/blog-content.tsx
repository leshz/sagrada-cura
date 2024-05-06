'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { ImageWrapper } from '@/components/Image'
import Link from 'next/link'

const BlogContent = ({ title, content, className = 'blog-content' }) => (
    <div className={className}>
      <h1>{title}</h1>
      <BlocksRenderer
        content={content}
        blocks={{
          image: ({ image }) => <ImageWrapper image={{ attributes: image }} />,
          link: ({ children, url }) => <Link href={url}>{children}</Link>
        }}
      />
    </div>
  )

export { BlogContent }
