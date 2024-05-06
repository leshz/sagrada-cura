import {
  BlocksRenderer,
} from '@strapi/blocks-react-renderer'

const Column = ({ data }) => {
  const { title = '', column = '' } = data || {}
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-lg-start justify-content-sm-end">
      <div className="footer-widget">
        <div className="widget-title">
          <h5>{title}</h5>
          <BlocksRenderer content={column} />
        </div>
        <div className="widget-list" />
      </div>
    </div>
  )
}

const Columns = ({ children }) => (
    <div className="footer-top">
      <div className="row g-lg-4 gy-5 justify-content-center">{children}</div>
    </div>
  )

export { Columns, Column }
