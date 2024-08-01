import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Logos2 from '../components/logos2'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Testimonial17 from '../components/testimonial17'
import Contact11 from '../components/contact11'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pintura Industrial Pimonsa</title>
        <meta property="og:title" content="Pintura Industrial Pimonsa" />
      </Helmet>
      <Navbar8
        link1={
          <fragment>
            <span className="home-text thq-body-small thq-link">Inicio</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="home-text01 thq-body-small thq-link">
              Servicios
            </span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text02 thq-body-small thq-link">
              Contacto
            </span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="home-text03 thq-body-small thq-link">Blog</span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="home-text04 thq-body-large">Page One</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="home-text05 thq-body-large">Page Two</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="home-text06 thq-body-large">Page Three</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="home-text07 thq-body-large">Page Four</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="home-text08">Llamanos</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="home-text09">Secondary Action</span>
          </fragment>
        }
        heading={
          <fragment>
            <span className="home-text10">Pintura Industrial Pimonsa S.L.</span>
          </fragment>
        }
        rootClassName="navbar8-root-class-name"
        page1Description={
          <fragment>
            <span className="home-text11 thq-body-small">
              Page One Description
            </span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="home-text12 thq-body-small">
              Page Two Description
            </span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="home-text13 thq-body-small">
              Page Three Description
            </span>
          </fragment>
        }
        page4Description={
          <fragment>
            <span className="home-text14 thq-body-small">
              Page Four Description
            </span>
          </fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <fragment>
            <span className="home-text15 thq-body-small">
              Explora nuestros servicios
            </span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="home-text16 thq-body-small">Contactanos</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text17 thq-body-large">
              Bienvenido a Pimonsa, su sitio de confianza para todas sus
              necesidades de pintura. Con más de cuatro décadas de experiencia,
              ofrecemos servicios de pintura de alta calidad para propietarios
              de viviendas, empresas e instituciones en toda Andalucía, España.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text18 thq-heading-1">
              <span>
                Servicio de
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text20">
                pintura
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                en todo
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text22">Andalucía</span>
            </span>
          </fragment>
        }
        rootClassName="hero17-root-class-name"
      ></Hero17>
      <Logos2
        heading1={
          <fragment>
            <span className="home-text23 thq-heading-2">
              Colaborando y trabajando con las mejores marcas del mercado
            </span>
          </fragment>
        }
        rootClassName="logos2-root-class-name"
      ></Logos2>
      <Features24
        feature1Title={
          <fragment>
            <span className="home-text24 thq-heading-2">
              Industrial Profesional de la Pintura
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="home-text25 thq-heading-2">
              Expertos especializados
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="home-text26 thq-heading-2">A medida</span>
          </fragment>
        }
        feature1ImgSrc="/images/partners/bruguer-logo.svg"
        feature1Description={
          <fragment>
            <span className="home-text27 thq-body-small">
              Con resultados eficaces y de calidad
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="home-text28 thq-body-small">
              Con expertos del sector experimentados
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="home-text29 thq-body-small">
              Haciendo trabajos a medida mano a mano con nuestros clientes y
              proveedores
            </span>
          </fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <fragment>
            <span className="home-text30">Ver nuestros servicios</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text31 thq-body-large">
              Descubre nuestros servicios de pintura de alta calidad, lacado y
              barnizado para hogares, negocios e instituciones en toda
              Andalucía.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text32 thq-heading-2">
              Transforma tu espacio con Pintura Industrial Pimonsa
            </span>
          </fragment>
        }
      ></CTA26>
      <Testimonial17
        review1={
          <fragment>
            <span className="home-text33 thq-body-small">
              Pintura Industrial Pimonsa did an excellent job painting our
              office space. The team was efficient, detail-oriented, and
              completed the project on time.
            </span>
          </fragment>
        }
        review2={
          <fragment>
            <span className="home-text34 thq-body-small">
              We hired Pintura Industrial Pimonsa to paint our home exterior,
              and we couldn&apos;t be happier with the results. They transformed
              the look of our house with their expertise.
            </span>
          </fragment>
        }
        review3={
          <fragment>
            <span className="home-text35 thq-body-small">
              As a property manager, I rely on Pintura Industrial Pimonsa for
              all our painting needs. Their professionalism and quality of work
              always exceed my expectations.
            </span>
          </fragment>
        }
        review4={
          <fragment>
            <span className="home-text36 thq-body-small">
              I highly recommend Pintura Industrial Pimonsa for any painting
              project. Their team is skilled, courteous, and delivers
              exceptional results every time.
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text37 thq-body-small">
              Lea lo que dicen nuestros clientes de toda Andalucía sobre
              nuestros servicios profesionales de pintura.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text38 thq-heading-2">
              Las opiniones de nuestros clientes
            </span>
          </fragment>
        }
        author1Name={
          <fragment>
            <span className="home-text39 thq-body-large">Maria Lopez</span>
          </fragment>
        }
        author2Name={
          <fragment>
            <span className="home-text40 thq-body-large">Juan Martinez</span>
          </fragment>
        }
        author3Name={
          <fragment>
            <span className="home-text41 thq-body-large">Elena Garcia</span>
          </fragment>
        }
        author4Name={
          <fragment>
            <span className="home-text42 thq-body-large">Antonio Ramirez</span>
          </fragment>
        }
        author1Position={
          <fragment>
            <span className="home-text43 thq-body-small">Business Owner</span>
          </fragment>
        }
        author2Position={
          <fragment>
            <span className="home-text44 thq-body-small">Homeowner</span>
          </fragment>
        }
        author3Position={
          <fragment>
            <span className="home-text45 thq-body-small">Property Manager</span>
          </fragment>
        }
        author4Position={
          <fragment>
            <span className="home-text46 thq-body-small">
              Home Renovation Specialist
            </span>
          </fragment>
        }
      ></Testimonial17>
      <Contact11
        email={
          <fragment>
            <span className="home-text47 thq-body-small">
              pimonsasl@gmail.com
            </span>
          </fragment>
        }
        phone1={
          <fragment>
            <span className="home-text48 thq-body-small">+34 957 65 26 97</span>
          </fragment>
        }
        phone11={
          <fragment>
            <span className="home-text49 thq-body-small">+34 123 456 789</span>
          </fragment>
        }
        address1={
          <fragment>
            <span className="home-text50 thq-body-small">
              Avda. de Granada, 19, 14550 Montilla, Córdoba
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text51 thq-body-large">
              Te atenderemos por cualquiera de los siguientes medios
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text52 thq-heading-2">
              ¿Quieres ponerte en contacto con nosotros?
            </span>
          </fragment>
        }
        phone111={
          <fragment>
            <span className="home-text53 thq-body-small">+34 123 456 789</span>
          </fragment>
        }
      ></Contact11>
      <Footer4
        link1={
          <fragment>
            <span className="home-text54 thq-body-small">Inicio</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text55 thq-body-small">Contacto</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="home-text56 thq-body-small">
              Términos y condiciones
            </span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="home-text57 thq-body-small">
              Política de Cookies
            </span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="home-text58 thq-body-small">
              Politica de Privacidad
            </span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
