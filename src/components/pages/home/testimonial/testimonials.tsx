import { getCollections } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { Slider } from './slider'

import './styles.scss'

const Testimonial = async ({ labels }) => {
  const { title } = labels
  const { data } = await getCollections(COLLECTIONS.testimonials)
  return (
    <div className="say-about-section mb-110">
      <div className="container-fluid p-0">
        <div className="section-title2 style-3">
          <h3>{title}</h3>
          <div className="slider-btn">
            <div className="about-prev-btn">
              <i className="bi bi-arrow-left" />
            </div>
            <div className="about-next-btn">
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </div>
        <div className="say-about-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <Slider slides={data} />
            </div>
          </div>
          <div className="swiper-pagination2" />
        </div>
      </div>
    </div>
  )
}

export { Testimonial }
