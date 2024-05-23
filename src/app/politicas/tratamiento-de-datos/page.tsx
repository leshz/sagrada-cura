import { BlogContent } from '@/components/blog'
import { ImageWrapper } from '@/components/Image'
import { getSingles } from '@/services'

export const dynamic = 'force-static'

const AboutUs = async () => {
  // eslint-disable-next-line no-unused-vars
  const { title, article, image } = await getSingles('about-us')

  return (
    <div className="about-us-banner mb-40">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-us-thumb hover-img mb-60">
              <ImageWrapper image={image} />
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
                title="Tratamiento de datos"
                content={article}
                className="about-us-wrapper"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
