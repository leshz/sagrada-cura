import Link from 'next/link'

const NotFound = () => (
  <div className="error-section">
    <div className="mark">
      image from <Link href="www.freepik.com">freepik</Link>
    </div>
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8 ">
          <div className="error-wrapper">
            <div className="error-content">
              <h1>La página que buscas no existe.</h1>
              <p>
                Respira, inhala, exhala... ¡Sigue buscando! <br />
                Tal vez otra te sirva mejor. 😎
              </p>
              <Link
                href="/"
                className="primary-btn3 black-bg hover-btn5 hover-white"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NotFound
