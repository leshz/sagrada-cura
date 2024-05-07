'use client'

import { useMemo } from 'react'
import { ImageWrapper } from '@/components/Image'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Link from 'next/link'
import SwiperCore from 'swiper'

import 'swiper/css/bundle';

SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation])

const HightLights = ({ highlights }) => {
  const { title, highlight_slider: sliders } = highlights

  const exclusiveSlideSettings: SwiperOptions = useMemo(
    () => ({
      slidesPerView: 'auto',
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
    <div className="exclusive-product-section mb-110">
      <ImageWrapper
        image={{}}
        src="/assets/img/home1/icon/vector-3.svg"
        alt=""
        width={229}
        height={294}
        className="vector3"
      />
      <ImageWrapper
        image={{}}
        src="/assets/img/home1/icon/vector-4.svg"
        alt=""
        width={332}
        height={293}
        className="vector4"
      />
      <div className="container">
        <div className="section-title style-2 text-center">
          <h3>{title}</h3>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              {...exclusiveSlideSettings}
              className="swiper exclusive-slider"
            >
              <div className="swiper-wrapper">
                {sliders.map(slide => {
                  const { id, description, link, button, image } = slide

                  return (
                    <SwiperSlide key={id} className="swiper-slide">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <div className="exclusive-product-left">
                            <h2>{title}</h2>
                            <BlocksRenderer
                              content={description}
                              blocks={{
                                'list-item': ({ children }) => (
                                  <li>
                                    <svg
                                      width={13}
                                      height={11}
                                      viewBox="0 0 13 11"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M12.2986 0.0327999C9.89985 0.832756 6.86143 2.97809 4.03623 6.6688L2.36599 4.778C2.09946 4.4871 1.63748 4.4871 1.38872 4.778L0.162693 6.17792C-0.0682981 6.45063 -0.0505298 6.86879 0.19823 7.12332L3.96516 10.814C4.28499 11.1231 4.78251 11.0322 4.99574 10.6504C7.00358 6.92333 9.17134 4.15985 12.7961 0.996384C13.2581 0.596406 12.8672 -0.167189 12.2986 0.0327999Z" />
                                    </svg>
                                    {children}
                                  </li>
                                )
                              }}
                            />
                            <Link
                              className="primary-btn1 hover-btn3"
                              href={link}
                            >
                              {button}
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="exclusive-product-right">
                            <div className="product-right-img hover-img">
                              <Link href="/shop/product-default">
                                <ImageWrapper
                                  image={image}
                                  width={540}
                                  height={321}
                                />
                              </Link>
                            </div>
                            {/* TODO: Discutir el uso de esta parte  */}
                            {/* <div className="product-right-content">
                              <Link legacyBehavior href="/shop">
                                <a>
                                  <img
                                    src="/assets/img/home1/loreal-logo.png"
                                    alt=""
                                  />
                                </a>
                              </Link>
                              <div className="star-bg">
                                <img src="/assets/img/home1/star.svg" alt="" />
                                <span>NEW</span>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </div>
            </Swiper>
            <div className="slider-btn">
              <div className="prev-btn exclusive-prev-btn">
                <i className="bi bi-arrow-up" />
              </div>
              <div className="next-btn exclusive-next-btn">
                <i className="bi bi-arrow-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HightLights }
