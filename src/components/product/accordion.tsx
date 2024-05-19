// import { BlocksRenderer } from '@strapi/blocks-react-renderer'

const Accordion = () => (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Description
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="product-description">
              <p>
                {' '}
                The Radiant Luxe Lipstick is the epitome of elegance and
                sophistication, designed to empower you with confidence and
                allure. This luxurious lipstick collection offers an array of
                shades that range from bold and vibrant to subtle and timeless,
              </p>
              <h6>Key Features:</h6>
              <ul>
                <li>
                  <span>Rich Pigmentation:</span> Our lipstick formula boasts
                  intense color payoff with a single stroke, delivering a bold
                  statement that lasts all day.
                </li>
                <li>
                  <span>Hydrating Formula:</span> Infused with nourishing
                  botanical extracts and oils, the formula keeps your lips
                  hydrated and supple, preventing any dryness or flakiness.
                </li>
                <li>
                  <span>Long-lasting:</span> Experience the confidence of a
                  long-lasting lip color that stays put even through your
                  busiest moments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Additional Information
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="addithonal-information">
              <table className="table total-table2">
                <tbody>
                  <tr>
                    <td>SKU</td>
                    <td>123ABC</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>Nail Polish</td>
                  </tr>
                  <tr>
                    <td>Tags</td>
                    <td>Nail Care, Nail Art</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>20 gm</td>
                  </tr>
                  <tr>
                    <td>Dimensions</td>
                    <td>2 × 4 × 5 cm</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>Revlon </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

export { Accordion }
