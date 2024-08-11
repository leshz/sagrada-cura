import { BlogSection, BlogContent } from '@/components/blog'
import { ImageWrapper } from '@/components/Image'
import { getSingles } from '@/services'

import './page.scss'

const AboutUs = async () => {
  const { title, article, image, blogs_title } = await getSingles('about-us', {
    next: { revalidate: process.env.REVALIDATE_CONTENT }
  })

  return (
    <>
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
