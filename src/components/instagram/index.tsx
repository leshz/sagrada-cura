'use client'

import { useMemo } from 'react'
import SwiperCore from 'swiper'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import { ImageWrapper } from '@/components/Image'

import 'swiper/css/bundle';

SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation])

const Instagram = ({ feed }) => {
  const { title, subtitle, profile_url, feed: images } = feed
  const { data } = images
  const sldieSettings: SwiperOptions = useMemo(() => ({
      slidesPerView: 'auto',
      spaceBetween: 15,
      loop: true,
      speed: 2500,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        386: {
          slidesPerView: 2
        },
        576: {
          slidesPerView: 4,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 15
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 15
        },
        1200: {
          slidesPerView: 7
        },
        1400: {
          slidesPerView: 8
        }
      }
    }), [])

  return (
    <div className="instagram-section mb-110">
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
                    {data.map(item => {
                      const { id } = item
                      return (
                        <SwiperSlide key={id} className="swiper-slide">
                          <a target="_blank" href={profile_url} aria-label='link'>
                            <ImageWrapper image={item} />
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
