import { FAREWELL_SOCIAL_LINKS } from '@/utils/constants'

import './styles.scss'

const Farewell = () => (
  <main id="main-content" className="farewell">
    <div className="farewell__inner">
      <span className="farewell__wordmark">Sagrada Cura</span>

      <div className="farewell__ornament" aria-hidden="true">
        <span />
        <i className="bi bi-flower1" />
        <span />
      </div>

      <h1 className="farewell__title">
        Gracias por acompañarnos
        <em>este tiempo</em>
      </h1>

      <p className="farewell__lead">
        Cada visita, cada mensaje y cada momento compartido
        cuidaron este espacio y lo hicieron un lugar vivo.
      </p>

      <p className="farewell__text">
        Este espacio se cerrará, pero el camino continúa.
        Seguiremos acompañándote desde nuestras redes sociales.
      </p>

      <nav className="farewell__social" aria-label="Nuestras redes sociales">
        <ul>
          {FAREWELL_SOCIAL_LINKS.map(({ id, href, icon, label }) => (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Síguenos en ${label}`}
              >
                <i className={`bi bi-${icon}`} aria-hidden="true" />
                <span className="visually-hidden">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="farewell__signature">Con gratitud, Sagrada Cura</p>
    </div>
  </main>
)

export { Farewell }
