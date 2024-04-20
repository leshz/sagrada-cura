'use client'
import { useMemo } from 'react'
import Link from 'next/link'
import SwiperCore from 'swiper'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation])
import {
  BlocksRenderer,
  type BlocksContent
} from '@strapi/blocks-react-renderer'

const FixedBanner = ({ content }) => {
  const { title } = content
  return (
    <div className="col-xxl-3 col-xl-4">
      <div className="banner-2-left">
        <div className="banner-2-left-img">
          <img src="/assets/img/home2/banner-2-left-img.png" alt="" />
        </div>
        <div className="banner-2-left-content">
          <BlocksRenderer
            content={title}
            blocks={{
              // You can use the default components to set class names...
              paragraph: ({ children }) => (
                <h2 className="text-neutral900 max-w-prose">{children}</h2>
              ),
              // ...or point to a design system
              heading: ({ children, level }) => {
                switch (level) {
                  case 1:
                    return <h2 className="">{children}</h2>
                  case 2:
                    return <h2 className="">{children}</h2>
                  case 3:
                    return <h2 className="">{children}</h2>
                  case 4:
                    return <h2 className="">{children}</h2>
                  case 5:
                    return <h2 className="">{children}</h2>
                  case 6:
                    return <h2 className="">{children}</h2>
                  default:
                    return <h2 className="">{children}</h2>
                }
              }
            }}
            modifiers={{
              bold: ({ children }) => <strong>{children}</strong>
            }}
          />
          <Link href="/shop" className="primary-btn3 hover-btn5">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}

const DoubleBanner = ({ data }) => {
  const { fixed_banner } = data

  const bannerSlide = useMemo(() => {
    return {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 2000,
      loop: true,
      autoplay: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.swiper-pagination2',
        clickable: true
      }
    }
  }, [])
  return (
    <div className="banner-2-section mb-110 ">
      <div className="container-fluid p-0">
        <div className="row">
          <FixedBanner content={fixed_banner} />
          <div className="col-xxl-9 col-xl-8">
            <div className="banner-2-right">
              <Swiper {...bannerSlide} className="swiper banner2-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-2-right-img-bg"
                      style={{
                        backgroundImage:
                          'url(assets/img/home2/banner-right-bg-img1.png)'
                      }}
                    >
                      <div className="banner-2-right-content">
                        <h1>
                          Makeup Package <span>Under</span>
                          <strong>$25</strong>
                        </h1>
                        <p>
                          Whatever your summer looks like, bring yourown heat
                          with up to 25% off Lumin Brand.
                        </p>
                        <Link legacyBehavior href="/shop">
                          <a className="primary-btn3 black-bg hover-btn5 hover-white">
                            Shop Now
                          </a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-2-right-img-bg"
                      style={{
                        backgroundImage:
                          'url(assets/img/home2/banner-right-bg-img2.png)'
                      }}
                    >
                      <div className="banner-2-right-content">
                        <h2>
                          Face Accessories <span>Under</span>
                          <strong>$25</strong>
                        </h2>
                        <p>
                          Whatever your summer looks like, bring yourown heat
                          with up to 25% off Lumin Brand.
                        </p>
                        <Link legacyBehavior href="/shop">
                          <a className="primary-btn3 black-bg hover-btn5 hover-white">
                            Shop Now
                          </a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-2-right-img-bg"
                      style={{
                        backgroundImage:
                          'url(assets/img/home2/banner-right-bg-img3.png)'
                      }}
                    >
                      <div className="banner-2-right-content">
                        <h2>
                          Beauty Product <span>Under</span>
                          <strong>$25</strong>
                        </h2>
                        <p>
                          Whatever your summer looks like, bring yourown heat
                          with up to 25% off Lumin Brand.
                        </p>
                        <Link legacyBehavior href="/shop">
                          <a className="primary-btn3 black-bg hover-btn5 hover-white">
                            Shop Now
                          </a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-2-right-img-bg"
                      style={{
                        backgroundImage:
                          'url(assets/img/home2/banner-right-bg-img4.png)'
                      }}
                    >
                      <div className="banner-2-right-content">
                        <h2>
                          Makeup Package <span>Under</span>
                          <strong>$25</strong>
                        </h2>
                        <p>
                          Whatever your summer looks like, bring yourown heat
                          with up to 25% off Lumin Brand.
                        </p>
                        <Link legacyBehavior href="/shop">
                          <a className="primary-btn3 black-bg hover-btn5 hover-white">
                            Shop Now
                          </a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="swiper-pagination2" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { DoubleBanner }
