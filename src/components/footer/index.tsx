import { NewsLetter } from './newsletter'
import { Columns, Column } from './column'

const FooterRoot = ({ children }) => (
  <footer className="footer-section style-2">
    <div className="container">{children}</div>
  </footer>
)

const Botton = ({ data }) => {
  const {
    footer: { botton: { copyright = '' } = {} } = {}
  } = data

  return (
    <div className="footer-bottom">
      <div className="row">
        <div className="col-lg-12 d-flex flex-md-row flex-column align-items-center justify-content-center flex-wrap gap-3">
          <div className="footer-left">
            <p>
              ©Copyright 2023 {copyright} | Design By{' '}
              <a href="https://shzcode.tech/">Shz Code</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const LastItem = () => (
  <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-end justify-content-md-center">
    <div className="footer-widget">
      <div className="widget-title style-2">
        <h5>Payment Gateway</h5>
      </div>
      <p>Sed vitae elementum elit. Ut sed maur id sem ultricies ultricies.</p>
      <div className="payment-gateway">
        <p>Secured Payment Gateways</p>
        {/* <div className="icons">
            <img src="assets/img/home1/icon/visa.png" alt="" />
            <img src="assets/img/home1/icon/mastercard.png" alt="" />
            <img src="assets/img/home1/icon/american-express.png" alt="" />
            <img src="assets/img/home1/icon/maestro.png" alt="" />
          </div> */}
      </div>
    </div>
  </div>
)

export const Footer = {
  Root: FooterRoot,
  Bottom: Botton,
  Columns,
  NewsLetter,
  LastItem,
  Column
}
