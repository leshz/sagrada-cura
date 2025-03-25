'use client'

import { sendGAEvent } from "@next/third-parties/google"

const NewsLetter = ({ data }) => {
  const { title = '', label = '' } = data || {}
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center">
      <div className="footer-widget pr-25">
        <h3>{title}</h3>
        <form>
          <div className="">
            <a
              aria-label="ir a la comunidad"
              className="d-flex justify-content-between primary-btn3 hover-btn5 transparent"
              target="_blank"
              href="https://chat.whatsapp.com/E9AHNf5wLIiHxlXSLlmoPF"
              onClick={() => {
                sendGAEvent('event', 'goToWhatsapp')
              }}
            >
              {label}
              <i className="bi bi-arrow-right mt-1" />
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export { NewsLetter }
