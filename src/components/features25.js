import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <h2>
                {props.feature1Title ?? (
                  <fragment>
                    <span className="features25-text thq-heading-2">
                      Professional Painting Services
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <fragment>
                    <span className="features25-text1 thq-body-small">
                      We offer a wide range of professional painting services
                      for homeowners, businesses, and institutions. Our
                      experienced team ensures high-quality results.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature2Title ?? (
                  <fragment>
                    <span className="features25-text2 thq-heading-2">
                      Customized Solutions
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <fragment>
                    <span className="features25-text4 thq-body-small">
                      Tailored painting solutions to meet the specific needs of
                      each client. From color selection to finishing touches, we
                      pay attention to every detail.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature3Title ?? (
                  <fragment>
                    <span className="features25-text5 thq-heading-2">
                      Quality Materials
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <fragment>
                    <span className="features25-text3 thq-body-small">
                      We use premium quality paints and materials to ensure a
                      durable and long-lasting finish for all our painting
                      projects.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature1Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1505377059067-e285a7bac49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjI1NjA1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1616615200447-b72e797919ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjI1NjA1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Quality Materials Image',
  feature2Title: undefined,
  feature3Description: undefined,
  feature2ImgAlt: 'Customized Solutions Image',
  feature2Description: undefined,
  feature3Title: undefined,
  feature1ImgAlt: 'Professional Painting Services Image',
  rootClassName: '',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1714962290675-678c21cf4892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjI1NjA1M3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Features25.propTypes = {
  feature1Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features25
