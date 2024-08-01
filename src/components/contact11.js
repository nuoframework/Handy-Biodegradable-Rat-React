import React from 'react'

import PropTypes from 'prop-types'

import './contact11.css'

const Contact11 = (props) => {
  return (
    <div id="contact" className="contact11-container thq-section-padding">
      <div className="contact11-max-width thq-section-max-width">
        <div className="contact11-section-title">
          <div className="contact11-content">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="contact11-text12 thq-heading-2">
                    Default value
                  </span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="contact11-text13 thq-body-large">
                    Default value
                  </span>
                </fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact11-content1 thq-flex-row">
          <div className="contact11-content2">
            <div className="contact11-content3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact11-contact-info">
                <h3 className="contact11-text02 thq-heading-3">Email</h3>
                <a
                  href="mailto:info@pimonsa.com?subject=Contacto desde la web"
                  className="contact11-email"
                >
                  {props.email ?? (
                    <fragment>
                      <span className="contact11-text08 thq-body-small">
                        info@pimonsa.com
                      </span>
                    </fragment>
                  )}
                </a>
              </div>
            </div>
            <div className="contact11-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact11-contact-info1">
                <h3 className="contact11-text03 thq-heading-3">Teléfono</h3>
                <a href="tel:+34957652697" className="contact11-text04">
                  {props.phone1 ?? (
                    <fragment>
                      <span className="contact11-text09 thq-body-small">
                        +34 123 456 789
                      </span>
                    </fragment>
                  )}
                </a>
                <a href="tel:+34686482723" className="contact11-text05">
                  {props.phone11 ?? (
                    <fragment>
                      <span className="contact11-text10 thq-body-small">
                        +34 123 456 789
                      </span>
                    </fragment>
                  )}
                </a>
                <a href="tel:+34630685215" className="contact11-text06">
                  {props.phone111 ?? (
                    <fragment>
                      <span className="contact11-text14 thq-body-small">
                        +34 123 456 789
                      </span>
                    </fragment>
                  )}
                </a>
              </div>
            </div>
            <div className="contact11-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact11-contact-info2">
                <h3 className="contact11-text07 thq-heading-3">Oficina</h3>
                <span>
                  {props.address1 ?? (
                    <fragment>
                      <span className="contact11-text11 thq-body-small">
                        123 Industrial Street, Andalusia, Spain
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <iframe
            src={props.location1GoogleMap}
            title="Map"
            className="contact11-iframe thq-img-ratio-16-9"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

Contact11.defaultProps = {
  email: undefined,
  phone1: undefined,
  phone11: undefined,
  address1: undefined,
  heading1: undefined,
  content1: undefined,
  phone111: undefined,
  location1GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.5529318006375!2d-4.635894287487837!3d37.5891438227131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d1377bf94236d%3A0xf8b57f312c8a9efd!2sPimonsa!5e0!3m2!1ses!2ses!4v1722292772779!5m2!1ses!2ses',
}

Contact11.propTypes = {
  email: PropTypes.element,
  phone1: PropTypes.element,
  phone11: PropTypes.element,
  address1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  phone111: PropTypes.element,
  location1GoogleMap: PropTypes.string,
}

export default Contact11
