import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container1 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal"
          >
            <div className="features24-divider-container">
              {activeTab === 0 && <div className="features24-container2"></div>}
            </div>
            <div className="features24-content">
              <h2>
                {props.feature1Title ?? (
                  <fragment>
                    <span className="features24-text3 thq-heading-2">
                      Professional Industrial Painting
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <fragment>
                    <span className="features24-text5 thq-body-small">
                      High-quality painting services for industrial structures
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 1 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2>
                {props.feature2Title ?? (
                  <fragment>
                    <span className="features24-text1 thq-heading-2">
                      Specialized Coatings
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <fragment>
                    <span className="features24-text4 thq-body-small">
                      Specialized coatings for industrial facilities
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 2 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2>
                {props.feature3Title ?? (
                  <fragment>
                    <span className="features24-text thq-heading-2">
                      Customized Residential Painting
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <fragment>
                    <span className="features24-text2 thq-body-small">
                      Residential painting solutions tailored to your needs
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature3Title: undefined,
  feature2Title: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjI1NjA1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  feature2ImgAlt: 'Specialized coatings for industrial facilities',
  feature1Title: undefined,
  feature2Description: undefined,
  feature1Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1551498624-3712f8e41930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjI1NjA1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Industrial painting services for businesses',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1508243529287-e21914733111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjI1NjA1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Residential painting services for homeowners',
}

Features24.propTypes = {
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
}

export default Features24
