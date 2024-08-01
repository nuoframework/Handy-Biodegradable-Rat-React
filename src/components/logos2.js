import React from 'react'

import PropTypes from 'prop-types'

import './logos2.css'

const Logos2 = (props) => {
  return (
    <div
      className={`logos2-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="logos2-max-width thq-section-max-width">
        <h2>
          {props.heading1 ?? (
            <fragment>
              <span className="logos2-text1 thq-heading-2">
                Colaborando y trabajando con las mejores marcas del mercado
              </span>
            </fragment>
          )}
        </h2>
        <div className="thq-grid-5">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos2-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos2-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos2-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos2-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos2-logo5 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos2.defaultProps = {
  logo2Alt: 'Logo de alta calidad en Andalucía, España',
  logo5Alt: 'Logo de resultados excepcionales',
  logo5Src: '/images/partners/logo%20titancolor%202019%20perfil_page-0001.svg',
  logo3Src: '/images/partners/logo_titantech_main1-1400w.png',
  logo4Src: '/images/partners/oxiron_logo-01-1400w.png',
  logo1Src: '/images/partners/bruguer-logo.svg',
  logo3Alt: 'Logo de soluciones personalizadas',
  rootClassName: '',
  logo2Src: '/images/partners/logo%20titan%20pro%20con%20claim-1400w.png',
  heading1: undefined,
  logo1Alt: 'Logo de Pintura Industrial Pimonsa S.L.',
  logo4Alt: 'Logo de atención al detalle',
}

Logos2.propTypes = {
  logo2Alt: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo5Src: PropTypes.string,
  logo3Src: PropTypes.string,
  logo4Src: PropTypes.string,
  logo1Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  logo2Src: PropTypes.string,
  heading1: PropTypes.element,
  logo1Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
}

export default Logos2
