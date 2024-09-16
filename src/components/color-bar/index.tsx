import './style.scss'

const ColorBar = ({ status }) => {
  const statusBar = status !== 'null' ? status : 'failed'

  return <div className={`color-bar ${statusBar}`} />
}
export { ColorBar }
