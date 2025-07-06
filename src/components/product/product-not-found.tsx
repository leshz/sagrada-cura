import Link from 'next/link'

interface ProductNotFoundProps {
  slug: string
}

export const ProductNotFound = ({ slug }: ProductNotFoundProps) => (
  <div className="product-not-found">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1>Producto no encontrado</h1>
          <p>
            Lo sentimos, el producto <strong>{slug}</strong> no está disponible en este momento.
          </p>
          <div className="suggestions">
            <h2>Te sugerimos:</h2>
            <ul className="suggestion-list">
              <li>
                <Link href="/tienda" className="suggestion-link">
                  Ver todos nuestros productos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="suggestion-link">
                  Leer nuestro blog sobre bienestar
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="suggestion-link">
                  Contactarnos para más información
                </Link>
              </li>
            </ul>
          </div>
          <div className="search-suggestion">
            <p>¿Buscas algo específico?</p>
            <Link href="/tienda" className="primary-btn3 hover-btn5">
              Explorar tienda
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
) 