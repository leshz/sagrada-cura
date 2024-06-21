import { notFound } from 'next/navigation'
import { BlogContent } from '@/components/blog'
import { ImageWrapper } from '@/components/Image'
import { getSingles } from '@/services'

import '../../nuestra-marca/page.scss'

export const generateStaticParams = async () => {
  const pages = [
    'condiciones-de-envio',
    'derecho-de-retracto',
    'paquetes-corporativo',
    'politicas-de-devolucion',
    'tratamiento-de-datos'
  ]
  return pages
}

const Docs = async ({ params }) => {
  const { page } = params

  const availablePages = {
    'condiciones-de-envio': 'condiciones-de-envio',
    'derecho-de-retracto': 'derecho-de-retracto',
    'paquetes-corporativos': 'planes-corporativo',
    'politicas-de-devolucion': 'politicas-de-devolucion',
    'tratamiento-de-datos': 'tratamiento-de-dato'
  }

  try {
    const { content, image, title } = await getSingles(availablePages[page])

    return (
      <div className="about-us-banner mb-40">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="about-us-thumb hover-img mb-60">
                <ImageWrapper image={image} fill format="large" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {content && (
                  <BlogContent
                    title={title}
                    content={content}
                    className="content-wrapper"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    return notFound()
  }
}

export default Docs
