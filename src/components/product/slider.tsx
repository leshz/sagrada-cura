'use client'

import { ImageWrapper } from '@/components/Image'
import { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'

const Slider = ({ pictures }) => {
  const slideSettings = useMemo(
    () => ({
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.exclusive-next-btn',
        prevEl: '.exclusive-prev-btn'
      }
    }),
    []
  )

  return (
    <div className="shop-details-img style-2">
      <div className="tab-content" id="v-pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="v-pills-img1"
          role="tabpanel"
        >
          <Swiper {...slideSettings} className="swiper exclusive-slider">
            <div className="swiper-wrapper">
              {pictures.map(picture => (
                <SwiperSlide key={picture.id} className="swiper-slide">
                  <div className="shop-details-tab-img">
                    <ImageWrapper image={picture} />
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="slider-btn">
              <div className="exclusive-prev-btn">
                <i className="bi bi-chevron-left" />
              </div>
              <div className="exclusive-next-btn">
                <i className="bi bi-chevron-right" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
      <div
        className="nav nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        {pictures.map(picture => (
          <SwiperSlide key={picture.id} className="swiper-slide">
            <button
              aria-label="selector"
              className="nav-link active"
              id="v-pills-img1-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-img1"
              type="button"
              role="tab"
              aria-controls="v-pills-img1"
              aria-selected="true"
            >
              <ImageWrapper image={picture} width={80} height={80} />
            </button>
          </SwiperSlide>
        ))}
      </div>
    </div>
  )
}

export { Slider }
