import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BlogAuthor, BlogContent } from '@/components/blog'
import { RelatedPosts } from '@/components/blog/related-posts'
import { RecentPost } from '@/components/recent-post'
import { TagsCloud } from '@/components/tags-cloud'
import { TagBar } from '@/components/tag-bar'
import { BlogStructuredData } from '@/components/structured-data/blog-schema'
// import { BlogBreadcrumbs } from '@/components/breadcrumbs/blog-breadcrumbs'
import { getCollections } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { dateFormat, getImagePath } from '@/utils/helpers'
import { ImageWrapper } from '@/components/Image'

import './page.scss'

export const dynamic = 'force-static'

export const generateStaticParams = async () => {
  const { data: blogs } = await getCollections<any>(COLLECTIONS.blogs, {
    params: {
      'pagination[pageSize]': '100',
    },
  })
  const slugs = blogs.map(entry => ({ slug: entry.slug }))

  return slugs
}

export const generateMetadata = async ({ params }): Promise<Metadata> => {
  const { slug } = params
  const { data } = await getCollections<any>(COLLECTIONS.blogs, {
    slug
  })

  const { title, image, short_description, slug: slugPost, tags } = data

  const imgUrl = getImagePath(image, 'small')
  const canonicalUrl = `https://sagradacura.com/blog/${slugPost}`
  const authorName = "Sagrada Cura"
  const keywords = tags?.data?.map((tag: any) => tag.name).join(", ") || "sanación natural, bienestar, espiritualidad"

  return {
    title: `${title} | Blog de Sagrada Cura`,
    description: short_description,
    alternates: {
      canonical: canonicalUrl
    },
    authors: {
      name: authorName as string,
      url: 'https://sagradacura.com'
    },
    openGraph: {
      title,
      description: short_description,
      url: canonicalUrl,
      images: imgUrl,
      type: 'article',
      locale: 'es',
      siteName: 'Sagrada Cura',
      authors: [authorName],
      tags: keywords.split(", ")
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: short_description,
      images: imgUrl
    },
    other: {
      'article:section': 'Blog',
      'article:tag': keywords,
      'article:published_time': data.publishedAt?.toString() || '',
      'article:modified_time': data.publishedAt?.toString() || '',
      'article:author': authorName,
      'article:publisher': 'Sagrada Cura'
    }
  }
}

const BlogDetailsPage = async ({ params }) => {
  const { slug } = params
  const { data } = await getCollections<any>(COLLECTIONS.blogs, {
    slug
  })

  if (data === null) return notFound()

  const fullPath = `${process.env.WEBPATH}/blog/${slug}`

  const { publishedAt, article, title, image, tags, author } = data

  return (
    <>
      <BlogStructuredData blog={data} />
      <div className="blog-details-section mb-40">
        <div className="container">
          {/* <BlogBreadcrumbs currentPage={title} /> */}
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <BlogAuthor author={author} tags={tags} />
              <div className="blog-thumb">
                <ImageWrapper image={image} format="large" />
                <time className="date-blog">{dateFormat(publishedAt)}</time>
              </div>
              <BlogContent title={title} content={article} />
              <div className="blog-navigation mt-40">
                <div className="row">
                  <div className="col-12">
                    <Link href="/blog" className="primary-btn3 black-bg hover-btn5 hover-white">
                      ← Volver al Blogs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-area">
                <RecentPost />
                <TagsCloud />
              </div>
            </div>
          </div>
          <div className="blog-tag-and-social">
            <TagBar.TagBar tags={tags} />
            <div className="social">
              <h6>Compartir :</h6>
              <ul className="social-list">
                <li>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${fullPath}`}
                    target="_blank"
                    aria-label="go to facebook"
                  >
                    <i className="bi bi-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={`https://twitter.com/intent/tweet?text=${fullPath}`}
                    aria-label="go to twitter"
                  >
                    <i className="bi bi-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <RelatedPosts currentSlug={slug} tags={tags?.data || []} />
    </>
  )
}

export default BlogDetailsPage
