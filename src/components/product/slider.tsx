'use client'

import { ImageWrapper } from '@/components/Image'
import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import SwiperCore from 'swiper'

import 'swiper/css/bundle'

SwiperCore.use([Pagination, Autoplay, EffectFade])

const Slider = ({ pictures }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const slideSettings = {
    modules: [Thumbs],
    thumbs: { swiper: thumbsSwiper },
    spaceBetween: 10,
    autoPlay: true,
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.exclusive-next-btn',
      prevEl: '.exclusive-prev-btn'
    }
  }

  const picsPerView = pictures?.length > 6 ? 6 : pictures?.length || 0

  return (
    <div className="shop-details-img style-2">
      <div className="tab-content">
        <div className="tab-pane fade show active">
          <Swiper {...slideSettings} className="swiper exclusive-slider">
            <div className="swiper-wrapper">
              {pictures?.map(picture => (
                <SwiperSlide key={picture.id} className="swiper-slide">
                  <div className="shop-details-tab-img">
                    <ImageWrapper image={picture} fill priority />
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
      {picsPerView && (
        <div className="nav nav-pills">
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={1}
            height={80}
            slidesPerView={picsPerView}
            freeMode
            watchSlidesProgress
          >
            {pictures.map(picture => (
              <SwiperSlide key={`${picture.id}`} className="swiper-slide-thumb">
                <ImageWrapper
                  image={picture}
                  width={80}
                  height={80}
                  className="nav-image"
                  priority
                  format="thumbnail"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  )
}

export { Slider }
