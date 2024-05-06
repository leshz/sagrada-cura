
const SearchBox = () => (
    <div className="shop-widget mb-30">
      <h5 className="shop-widget-title">Search Here</h5>
      <form>
        <div className="search-box">
          <input type="text" placeholder="Search Here" />
          <button type="submit">
            <i className="bx bx-search" />
          </button>
        </div>
      </form>
    </div>
  )

export { SearchBox }
