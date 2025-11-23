'use client'

import { useMemo } from 'react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import { ImageWrapper } from '@/components/Image'

import 'swiper/css/bundle'

const Instagram = ({ feed }) => {
  const { title, subtitle, profile_url, feed: images = [] } = feed || {}
  const sldieSettings: SwiperOptions = useMemo(
    () => ({
      modules: [Pagination, Autoplay, EffectFade, Navigation],
      slidesPerView: 'auto',
      spaceBetween: 15,
      loop: true,
      speed: 2500,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        386: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        576: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 0
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 0
        },
        1200: {
          slidesPerView: 7,
          spaceBetween: 0
        },
        1400: {
          slidesPerView: 8,
          spaceBetween: 0
        }
      }
    }),
    []
  )

  return (
    <div className="instagram-section">
      <div className="container">
        <div className="section-title style-3">
          <h3>{title}</h3>
          <p>
            <a target="_blank" href={profile_url}>
              {subtitle}
            </a>
          </p>
        </div>
      </div>
      <div className="instagram-wrapper">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <Swiper {...sldieSettings} className="swiper instagram-slider">
                <div className="swiper-wrapper">
                  {images?.map(item => {
                    const { id } = item
                    return (
                      <SwiperSlide key={id} className="swiper-slide">
                        <a target="_blank" href={profile_url} aria-label="link">
                          <ImageWrapper format="small" image={item} />
                        </a>
                      </SwiperSlide>
                    )
                  })}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Instagram }
