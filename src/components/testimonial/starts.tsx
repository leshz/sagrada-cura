const Starts = ({ quantity }) => {
  let i = 1
  const starts = Array.from(Array(5), () => {
    i += 1
    return i
  })

  return (
    <div className="say-about-card-top">
      <ul>
        {starts.map(item => {
          const label = item <= quantity ? '-fill' : ''
          return (
            <li key={item}>
              <i className={`bi bi-star${label}`} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { Starts }
