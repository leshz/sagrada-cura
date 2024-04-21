'use client'
import React, { useState } from 'react'
import BeautyArticle from '@/components/Home/BeautyArticle'

const AboutPage = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className="about-us-banner mt-110  mb-110">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-us-thumb hover-img mb-60">
                <img
                  src="/assets/img/inner-page/about-us-banner-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Start About Us Content Section section */}
        <div className="about-us-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="about-us-wrapper">
                  <h1>Ensure Superlative Support with Technology.</h1>
                  <p>
                    Donec accumsan justo eget porta pellentesque. Etiam vitae
                    malesuada lorem, sed lobortis arcu. Aenean onegn vulputate
                    ligula eu elit porttitor tempus. Suspendisse ultrices augue
                    ac tempus hendrerit. Integer id cursusourc ligula, quis
                    faucibus enim. Donec sit amet aliquam leo. Donec eget risus
                    elementum, finibus elit vel, goutava condimentum sapien. In
                    hac habitasse platea dictumst. Cras faucibus lacus
                    scelerisque elementum aliquam. Ut porta efficitur metus sed
                    varius.
                  </p>
                  <p>
                    Donec accumsan justo eget porta pellentesque. Etiam vitae
                    malesuada lorem, sed lobortis arcu. Aenean onegn vulputate
                    ligula eu elit porttitor tempus. Suspendisse ultrices augue
                    ac tempus hendrerit. Integer id cursusourc ligula, quis
                    faucibus enim. Donec sit amet aliquam leo. Donec eget risus
                    elementum, finibus elit vel, goutava{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Us Content Section section */}
      </div>
      <div className="about-us-video">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-video-thumb">
                <img src="/assets/img/inner-page/about-video-bg.png" alt="" />
                <a data-fancybox="popup-video" onClick={() => setOpen(true)}>
                  <i className="bi bi-play-fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <BestBrand /> */}
      <BeautyArticle />
    </>
  )
}

export default AboutPage
