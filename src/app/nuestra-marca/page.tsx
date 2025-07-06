import type { Metadata } from 'next'
import { BlogSection, BlogContent } from '@/components/blog'
import { ImageWrapper } from '@/components/Image'
import { getSingles } from '@/services'
import { StaticBreadcrumbs } from '@/components/breadcrumbs/static-breadcrumbs'
import { StaticPageSchema } from '@/components/structured-data/static-page-schema'

import { APIResponseData } from '@/types/types'

import './page.scss'

export const dynamic = 'force-static'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Nuestra Marca | Sagrada Cura',
  description: 'Conoce la historia de Sagrada Cura, nuestra misión de ofrecer productos naturales para tu bienestar y sanación espiritual en Colombia.',
  keywords: 'sagrada cura, nuestra marca, historia, productos naturales, bienestar, sanación espiritual, colombia',
  alternates: {
    canonical: 'https://sagradacura.com/nuestra-marca',
  },
  openGraph: {
    title: 'Nuestra Marca | Sagrada Cura',
    description: 'Conoce la historia de Sagrada Cura, nuestra misión de ofrecer productos naturales para tu bienestar y sanación espiritual en Colombia.',
    url: 'https://sagradacura.com/nuestra-marca',
    type: 'website'
  }
})

const AboutUs = async () => {
  const { title, article, image, blogs_title } = await getSingles<APIResponseData<"api::about-us.about-us">>('about-us')

  const breadcrumbsData = [
    { name: 'Inicio', url: 'https://sagradacura.com' },
    { name: 'Nuestra Marca', url: 'https://sagradacura.com/nuestra-marca' }
  ]

  return (
    <>
      <StaticPageSchema
        pageType="AboutPage"
        title="Nuestra Marca - Sagrada Cura"
        description="Conoce la historia de Sagrada Cura, nuestra misión de ofrecer productos naturales para tu bienestar y sanación espiritual en Colombia."
        url="https://sagradacura.com/nuestra-marca"
        breadcrumbs={breadcrumbsData}
      />
      <div className="about-us-banner mb-40">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <StaticBreadcrumbs
                currentPage="Nuestra Marca"
                path={[
                  { name: 'Inicio', href: '/' },
                  { name: 'Nuestra Marca', href: '/nuestra-marca' }
                ]}
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="about-us-thumb hover-img mb-60">
                <ImageWrapper image={image} fill format="large" />
              </div>
            </div>
          </div>
        </div>
        {/* Start About Us Content Section section */}
        <div className="about-us-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <BlogContent
                  title={title}
                  content={article}
                  className="content-wrapper"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End About Us Content Section section */}
      </div>
      <BlogSection title={blogs_title} />
    </>
  )
}

export default AboutUs
