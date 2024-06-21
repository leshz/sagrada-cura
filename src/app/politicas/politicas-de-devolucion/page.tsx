import { BlogContent } from '@/components/blog'
import { ImageWrapper } from '@/components/Image'
import { getSingles } from '@/services'

import '../../nuestra-marca/page.scss'

export const dynamic = 'force-static'

const Shipping = async () => {
  const { content, image, title } = await getSingles('politicas-de-devolucion')

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
      {/* Start About Us Content Section section */}
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
}

export default Shipping
