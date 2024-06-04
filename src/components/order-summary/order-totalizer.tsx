

const OrderTotalizer = () => (
  <>
    <div className="cost-summary mb-30">
      <table className="table cost-summary-table">
        <thead>
          <tr>
            <th>Subtotal</th>
            <th>$128.70</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tax">Tax</td>
            <td>$5</td>
          </tr>
          <tr>
            <td>Total ( tax excl.)</td>
            <td>$15</td>
          </tr>
          <tr>
            <td>Total ( tax incl.)</td>
            <td>$15</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="cost-summary total-cost mb-30">
      <table className="table cost-summary-table total-cost">
        <thead>
          <tr>
            <th>Total</th>
            <th>$162.70</th>
          </tr>
        </thead>
      </table>
    </div>
  </>
)

export { OrderTotalizer }
