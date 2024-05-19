import { BlocksRenderer } from '@strapi/blocks-react-renderer'

const Accordion = ({ information, parentId = 'productAccordion' }) => {
  if (!information || information?.length === 0) return null

  return (
    <div className="accordion" id={parentId}>
      {information.map((item: any) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header" id={`${item.id}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${parentId}-${item.id}`}
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              {item?.title}
            </button>
          </h2>
          <div
            id={`${parentId}-${item.id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`${item.id}`}
            data-bs-parent={`#${parentId}`}
          >
            <div className="accordion-body">
              <div className="product-description">
                <BlocksRenderer content={item?.information} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export { Accordion }
