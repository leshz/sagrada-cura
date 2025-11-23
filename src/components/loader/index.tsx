import './loader.scss'

interface LoaderProps {
  fullScreen?: boolean
  size?: 'small' | 'medium' | 'large'
}

export const Loader = ({ fullScreen = false, size = 'medium' }: LoaderProps) => (
  <div className={`loader-container ${fullScreen ? 'fullscreen' : ''}`}>
    <div className={`loader ${size}`}>
      <div className="loader-spinner">
        <div className="spinner-circle" />
        <div className="spinner-circle" />
        <div className="spinner-circle" />
      </div>
      <p className="loader-text">Cargando...</p>
    </div>
  </div>
)
