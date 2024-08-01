import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className={`hero17-header78 ${props.rootClassName} `}>
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content">
          <h1>
            {props.heading1 ?? (
              <fragment>
                <span className="hero17-text7 thq-heading-1">
                  Professional Painting Services in Andalusia
                </span>
              </fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <fragment>
                <span className="hero17-text6 thq-body-large">
                  Welcome to Pintura Industrial Pimonsa, your trusted partner
                  for all your painting needs. With over two decades of
                  experience, we provide high-quality painting services for
                  homeowners, businesses, and institutions across Andalusia,
                  Spain.
                </span>
              </fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="hero17-button thq-button-filled">
            <span>
              {props.action1 ?? (
                <fragment>
                  <span className="hero17-text4 thq-body-small">
                    Explore Our Services
                  </span>
                </fragment>
              )}
            </span>
          </button>
          <button className="hero17-button1 thq-button-outline">
            <span>
              {props.action2 ?? (
                <fragment>
                  <span className="hero17-text5 thq-body-small">
                    Contact Us
                  </span>
                </fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div>
        <div className="hero17-container1">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  action1: undefined,
  rootClassName: '',
  action2: undefined,
  content1: undefined,
  heading1: undefined,
}

Hero17.propTypes = {
  action1: PropTypes.element,
  rootClassName: PropTypes.string,
  action2: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero17
