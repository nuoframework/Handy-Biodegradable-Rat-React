import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo1"
            />
          </div>
          <div className="footer4-links">
            <Link to="/" className="footer4-navlink">
              {props.link1 ?? (
                <fragment>
                  <span className="footer4-text8 thq-body-small">Inicio</span>
                </fragment>
              )}
            </Link>
            <a href="#contact" className="footer4-link">
              {props.link3 ?? (
                <fragment>
                  <span className="footer4-text6 thq-body-small">Contacto</span>
                </fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">
                © 2024 Pintura Industrial Pimonsa S.L.
              </span>
            </div>
            <div className="footer4-footer-links">
              <span>
                {props.privacyLink ?? (
                  <fragment>
                    <span className="footer4-text7 thq-body-small">
                      Politica de Privacidad
                    </span>
                  </fragment>
                )}
              </span>
              <span>
                {props.termsLink ?? (
                  <fragment>
                    <span className="footer4-text4 thq-body-small">
                      Términos y condiciones
                    </span>
                  </fragment>
                )}
              </span>
              <span>
                {props.cookiesLink ?? (
                  <fragment>
                    <span className="footer4-text5 thq-body-small">
                      Política de Cookies
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  termsLink: undefined,
  cookiesLink: undefined,
  link3: undefined,
  privacyLink: undefined,
  link1: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  logoAlt: 'Pintura Industrial Pimonsa Logo',
}

Footer4.propTypes = {
  termsLink: PropTypes.element,
  cookiesLink: PropTypes.element,
  link3: PropTypes.element,
  privacyLink: PropTypes.element,
  link1: PropTypes.element,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default Footer4
