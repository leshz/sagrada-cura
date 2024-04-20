'use client'
import { useMemo } from 'react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Link from 'next/link'
import Image from 'next/image'
import SwiperCore from 'swiper'

SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation])

const FixedBanner = ({ content }) => {
  const { title = {}, image = {}, link = {} } = content || {}
  const imagenToBoanner = image?.data?.attributes || null
  const { text = '', link: url = '' } = link
  return (
    <div className="col-xxl-3 col-xl-4">
      <div className="banner-2-left">
        <div className="banner-2-left-img">
          {imagenToBoanner && (
            <Image
              src={imagenToBoanner.url}
              width={imagenToBoanner.width}
              height={imagenToBoanner.height}
              alt=""
            />
          )}
        </div>

        <div className="banner-2-left-content">
          {text && (
            <BlocksRenderer
              content={title}
              blocks={{
                paragraph: ({ children }) => <p className="">{children}</p>,
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

const BannerSlide = ({ slide }) => {
  const { image, text } = slide || {}
  const {
    data: { attributes: imageData }
  } = image

  return (
    <SwiperSlide className="swiper-slide">
      <div
        className="banner-2-right-img-bg"
        style={{
          backgroundImage: `url(${imageData.url})`
        }}
      >
        {text && (
          <div className="banner-2-right-content">
            <BlocksRenderer
              content={text}
              blocks={{
                // You can use the default components to set class names...
                paragraph: ({ children }) => (
                  <h2 className="text-neutral900 max-w-prose">{children}</h2>
                ),
                // ...or point to a design system
                heading: ({ children, level }) => {
                  switch (level) {
                    case 1:
                      return <h1 className="">{children}</h1>
                    case 2:
                      return <h2 className="">{children}</h2>
                    case 3:
                      return <h3 className="">{children}</h3>
                    case 4:
                      return <h4 className="">{children}</h4>
                    case 5:
                      return <h5 className="">{children}</h5>
                    case 6:
                      return <h6 className="">{children}</h6>
                    default:
                      return <h1 className="">{children}</h1>
                  }
                }
              }}
              modifiers={{
                bold: ({ children }) => <strong>{children}</strong>
              }}
            />
          </div>
        )}
      </div>
    </SwiperSlide>
  )
}

const DoubleBanner = ({ data }) => {
  const {
    banners,
    banners: { dinamic_banner = [] }
  } = data

  const bannerSlide = useMemo(() => {
    return {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 2000,
      loop: dinamic_banner.length > 1,
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
  }, [dinamic_banner])
  return (
    <div className="banner-2-section mb-110 ">
      <div className="container-fluid p-0">
        <div className="row">
          <FixedBanner content={banners} />
          <div className="col-xxl-9 col-xl-8">
            <div className="banner-2-right">
              <Swiper {...bannerSlide} className="swiper banner2-slider">
                <div className="swiper-wrapper">
                  {dinamic_banner.map(slide => {
                    const { id } = slide
                    return <BannerSlide key={id} slide={slide} />
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
