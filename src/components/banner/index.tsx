'use client'

import { useMemo } from 'react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { ImageWrapper } from '@/components/Image'
import Link from 'next/link'
import SwiperCore from 'swiper'

import 'swiper/css/bundle'

SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation])

const FixedBanner = ({ content }) => {
  const { title = {}, image = {}, link = {} } = content || {}

  const { text = '', link: url = '' } = link
  return (
    <div className="col-xxl-3 col-xl-4 col-lg-4 d-none d-lg-block d-xl-block">
      <div className="banner-2-left">
        <div className="banner-2-left-img">
          {image && <ImageWrapper image={image} format='large' priority />}
        </div>

        <div className="banner-2-left-content">
          {text && (
            <BlocksRenderer
              content={title}
              blocks={{
                paragraph: ({ children }) => <p className="">{children}</p>
              }}
              modifiers={{
                bold: ({ children }) => <strong>{children}</strong>,
                italic: ({ children }) => <span>{children}</span>
              }}
            />
          )}
          {url && (
            <Link href={url} className="primary-btn3 hover-btn5">
              {text}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

const DoubleBanner = ({ data }) => {
  const { dinamic_banner = [] } = data

  const configBanner = useMemo(
    () => ({
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 3000,
      loop: true,
      autoplay: false,
      effect: 'fade',

      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.swiper-pagination2',
        clickable: true
      }
    }),
    []
  )
  return (
    <div className="banner-2-section mb-50">
      <div className="container-fluid p-0 full-height">
        <div className="row">
          <FixedBanner content={data} />
          <div className="col-xxl-9 col-xl-8 col-lg-8">
            <div className="banner-2-right">
              <Swiper {...configBanner} className="swiper banner2-slider">
                <div className="swiper-wrapper">
                  {dinamic_banner.map(slide => {
                    const { image, text } = slide || {}

                    return (
                      <SwiperSlide key={slide.id} className="swiper-slide">
                        <div className="banner-2-right-img-bg">
                          <ImageWrapper
                            image={image}
                            width={2000}
                            height={1333}
                          />
                          {text && (
                            <div className="banner-2-right-content">
                              <BlocksRenderer
                                content={text}
                                blocks={{
                                  paragraph: ({ children }) => (
                                    <p className="">{children}</p>
                                  ),
                                  link: ({ children, url: path }) => (
                                    <Link
                                      href={path}
                                      className="primary-btn3 black-bg hover-btn5 hover-white"
                                    >
                                      {children}
                                    </Link>
                                  ),
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
                                  bold: ({ children }) => (
                                    <strong>{children}</strong>
                                  ),
                                  italic: ({ children }) => (
                                    <span>{children}</span>
                                  )
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </SwiperSlide>
                    )
                  })}
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
