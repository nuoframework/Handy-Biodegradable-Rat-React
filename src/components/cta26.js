import React from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container1">
              <div className="cta26-content">
                <span>
                  {props.heading1 ?? (
                    <fragment>
                      <span className="cta26-text3 thq-heading-2">
                        Transforma tu espacio con Pintura Industrial Pimonsa
                      </span>
                    </fragment>
                  )}
                </span>
                <p>
                  {props.content1 ?? (
                    <fragment>
                      <span className="cta26-text4 thq-body-large">
                        Descubre nuestros servicios de pintura de alta calidad
                        para hogares, negocios e instituciones en toda
                        Andalucía.
                      </span>
                    </fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="cta26-button thq-button-filled"
                >
                  <span>
                    {props.action1 ?? (
                      <fragment>
                        <span className="cta26-text5">
                          Ver nuestros servicios
                        </span>
                      </fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
}

CTA26.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default CTA26
