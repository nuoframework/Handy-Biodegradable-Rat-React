import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="testimonial17-text19 thq-heading-2">
                  Testimonials
                </span>
              </fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="testimonial17-text14 thq-body-small">
                  Read what our clients across Andalusia are saying about our
                  professional painting services.
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong>
                      {props.author1Name ?? (
                        <fragment>
                          <span className="testimonial17-text25 thq-body-large">
                            Maria Lopez
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <fragment>
                          <span className="testimonial17-text26 thq-body-small">
                            Business Owner
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <fragment>
                      <span className="testimonial17-text17 thq-body-small">
                        Pintura Industrial Pimonsa did an excellent job painting
                        our office space. The team was efficient,
                        detail-oriented, and completed the project on time.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong>
                      {props.author2Name ?? (
                        <fragment>
                          <span className="testimonial17-text16 thq-body-large">
                            Juan Martinez
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <fragment>
                          <span className="testimonial17-text27 thq-body-small">
                            Homeowner
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <fragment>
                      <span className="testimonial17-text23 thq-body-small">
                        We hired Pintura Industrial Pimonsa to paint our home
                        exterior, and we couldn&apos;t be happier with the
                        results. They transformed the look of our house with
                        their expertise.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong>
                      {props.author3Name ?? (
                        <fragment>
                          <span className="testimonial17-text20 thq-body-large">
                            Elena Garcia
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <fragment>
                          <span className="testimonial17-text15 thq-body-small">
                            Property Manager
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <fragment>
                      <span className="testimonial17-text21 thq-body-small">
                        As a property manager, I rely on Pintura Industrial
                        Pimonsa for all our painting needs. Their
                        professionalism and quality of work always exceed my
                        expectations.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong>
                      {props.author4Name ?? (
                        <fragment>
                          <span className="testimonial17-text22 thq-body-large">
                            Antonio Ramirez
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <fragment>
                          <span className="testimonial17-text18 thq-body-small">
                            Home Renovation Specialist
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <fragment>
                      <span className="testimonial17-text24 thq-body-small">
                        I highly recommend Pintura Industrial Pimonsa for any
                        painting project. Their team is skilled, courteous, and
                        delivers exceptional results every time.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  content1: undefined,
  author3Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1532635241-17e820acc59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjI1NjA1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: undefined,
  author3Alt: 'Image of Elena Garcia',
  review1: undefined,
  author4Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjI1NjA1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Antonio Ramirez',
  author4Src:
    'https://images.unsplash.com/photo-1679841797892-aea650e48a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjI1NjA1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Juan Martinez',
  heading1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1680965422767-26d1b1dd6763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjI1NjA1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: undefined,
  review3: undefined,
  author4Name: undefined,
  author1Alt: 'Image of Maria Lopez',
  review2: undefined,
  review4: undefined,
  author1Name: undefined,
  author1Position: undefined,
  author2Position: undefined,
}

Testimonial17.propTypes = {
  content1: PropTypes.element,
  author3Position: PropTypes.element,
  author3Src: PropTypes.string,
  author2Name: PropTypes.element,
  author3Alt: PropTypes.string,
  review1: PropTypes.element,
  author4Position: PropTypes.element,
  author2Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author2Alt: PropTypes.string,
  heading1: PropTypes.element,
  author1Src: PropTypes.string,
  author3Name: PropTypes.element,
  review3: PropTypes.element,
  author4Name: PropTypes.element,
  author1Alt: PropTypes.string,
  review2: PropTypes.element,
  review4: PropTypes.element,
  author1Name: PropTypes.element,
  author1Position: PropTypes.element,
  author2Position: PropTypes.element,
}

export default Testimonial17
