import Link from 'next/link'
import Image from 'next/image'
import { Columns, Column } from './column'
import { NewsLetter } from './newsletter'
import { PhoneIcon } from '@/icons/phone'
import { phoneFormmater } from '@/utils/helpers'

const FooterRoot = ({ children }) => {
  return (
    <footer className="footer-section style-2">
      <div className="container">{children}</div>
    </footer>
  )
}

const Botton = ({ data }) => {
  const {
    top: { phone },
    footer: {
      botton: { copyright, phone: message }
    },
    menu = {}
  } = data

  const {
    logo: { data: { attributes = {} } = {} }
  } = menu

  return (
    <div className="footer-bottom">
      <div className="row">
        <div className="col-lg-12 d-flex flex-md-row flex-column align-items-center justify-content-md-between justify-content-center flex-wrap gap-3">
          <div className="footer-left">
            <p>
              ©Copyright 2023 {copyright} | Design By
              <a href="http://shzdev.com/">Shz Dev</a>
            </p>
          </div>
          {attributes && (
            <div className="footer-logo">
              <Link href="/">
                <Image
                  src={attributes.url}
                  alt="logo sagrada cura"
                  width={80}
                  height={20}
                />
              </Link>
            </div>
          )}
          <div className="footer-contact">
            <div className="logo">
              <PhoneIcon width={33} height={33} />
            </div>
            <div className="content">
              <p>{message}</p>
              <h6>
                <a href={`tel:${phone}`}>{phoneFormmater(phone)}</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const LastItem = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-end justify-content-md-center">
      <div className="footer-widget">
        <div className="widget-title style-2">
          <h5>Payment Gateway</h5>
        </div>
        <p>Sed vitae elementum elit. Ut sed maur id sem ultricies ultricies.</p>
        <div className="payment-gateway">
          <p>Secured Payment Gateways</p>
          <div className="icons">
            <img src="assets/img/home1/icon/visa.png" alt="" />
            <img src="assets/img/home1/icon/mastercard.png" alt="" />
            <img src="assets/img/home1/icon/american-express.png" alt="" />
            <img src="assets/img/home1/icon/maestro.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const Footer = {
  Root: FooterRoot,
  Bottom: Botton,
  Columns: Columns,
  NewsLetter,
  LastItem,
  Column
}
