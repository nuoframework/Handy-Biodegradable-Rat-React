import React from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="contact10-text10 thq-heading-2">
                    Contact Us
                  </span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="contact10-text11 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <fragment>
                  <span className="contact10-text06 thq-heading-3">
                    Pimonsa Industrial Painting
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <fragment>
                  <span className="contact10-text09 thq-body-large">
                    Visit us at our main office in Andalusia
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact10-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <fragment>
                  <span className="contact10-text08 thq-heading-3">
                    Send us a Message
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <fragment>
                  <span className="contact10-text07 thq-body-large">
                    Fill out the form below to get in touch with us
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact10-container4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1: undefined,
  location2Description: undefined,
  location2: undefined,
  location1Description: undefined,
  location1ImageAlt: 'Main Office Image',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjI1NjA1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1556908491-b697338d4851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjI1NjA1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  location2ImageAlt: 'Contact Form Image',
}

Contact10.propTypes = {
  location1: PropTypes.element,
  location2Description: PropTypes.element,
  location2: PropTypes.element,
  location1Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
}

export default Contact10
