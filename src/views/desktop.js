import React from 'react'

import { Helmet } from 'react-helmet'

import './desktop.css'

const Desktop = (props) => {
  return (
    <div className="desktop-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="desktop-desktop">
        <div className="desktop-navigation-footer">
          <div className="desktop-items1">
            <span className="desktop-text10">Política de privacidad</span>
          </div>
          <span className="desktop-text11">
            Focu Energía © 2025 Todos los derechos reservados
          </span>
          <div className="desktop-items2">
            <span className="desktop-text12">Términos y condiciones</span>
          </div>
          <img
            src="/logotipofocu1142-is5-200h.png"
            alt="logotipofocu1142"
            className="desktop-logotipofocu1"
          />
          <div className="desktop-social-icons">
            <a
              href="https://www.facebook.com/people/FOCU-Energ%C3%ADa/61579388109999/"
              target="_blank"
              rel="noreferrer noopener"
              className="desktop-buttons-icon1"
            >
              <div className="desktop-icon1">
                <img
                  src="/icon1957-y3v.svg"
                  alt="Icon1957"
                  className="desktop-icon2"
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/"
              target="_blank"
              rel="noreferrer noopener"
              className="desktop-buttons-icon2"
            >
              <div className="desktop-icon3">
                <img
                  src="/icon1962-3i5.svg"
                  alt="Icon1962"
                  className="desktop-icon4"
                />
              </div>
            </a>
            <button className="desktop-buttons-icon3">
              <div className="desktop-icon5">
                <img
                  src="/icon1972-08s.svg"
                  alt="Icon1972"
                  className="desktop-icon6"
                />
              </div>
            </button>
          </div>
          <img
            src="/divider1975-rvx7.svg"
            alt="Divider1975"
            className="desktop-divider"
          />
        </div>
        <div className="desktop-about">
          <div className="desktop-campoempresa">
            <img
              src="/buttonempresa67-jxed-200h.png"
              alt="buttonempresa67"
              className="desktop-buttonempresa"
            />
            <span className="desktop-text13">Empresa</span>
            <img
              src="/svgvieweroutput4735-ys5j.svg"
              alt="svgvieweroutput4735"
              className="desktop-svgvieweroutput4"
            />
          </div>
          <div className="desktop-explanation">
            <div className="desktop-pagetitle1">
              <span className="desktop-text14">
                <span>
                  Soluciones en energía solar accesible, rentable y para siempre
                </span>
                <br></br>
                <br></br>
                <span>
                  Desarrollo de proyectos en todo el territorio nacional
                </span>
              </span>
            </div>
          </div>
          <div className="desktop-campohogar">
            <img
              src="/buttonhogar1861-2ei.svg"
              alt="buttonhogar1861"
              className="desktop-buttonhogar"
            />
            <span className="desktop-text19">Hogar</span>
            <img
              src="/svgvieweroutput21733-fnto.svg"
              alt="svgvieweroutput21733"
              className="desktop-svgvieweroutput21"
            />
          </div>
          <div className="desktop-botoncotiza">
            <a
              href="https://focuenergia.com/simulador_cotizaciones"
              target="_blank"
              rel="noreferrer noopener"
              className="desktop-link1"
            >
              <img
                src="/cotiza63-hcm2-200h.png"
                alt="cotiza63"
                className="desktop-cotiza"
              />
            </a>
            <div className="desktop-copy1">
              <img
                src="/arrow1745-x419.svg"
                alt="Arrow1745"
                className="desktop-arrow1"
              />
              <div className="desktop-pagetitle2">
                <span className="desktop-text20">
                  <span>Calcula tu ahorro en minutos</span>
                  <br className="desktop-text22"></br>
                  <span className="desktop-text23">
                    Dimensionamiento, estimación de costos y retorno de
                    inversión
                  </span>
                </span>
              </div>
            </div>
            <img
              src="/svgvieweroutput31739-hqny.svg"
              alt="svgvieweroutput31739"
              className="desktop-svgvieweroutput31"
            />
          </div>
          <div className="desktop-frame129f14b3b3a290079c42ab7eff324be31">
            <div className="desktop-group">
              <img
                src="/vector616-1d72.svg"
                alt="Vector616"
                className="desktop-vector"
              />
            </div>
          </div>
        </div>
        <div className="desktop-navigation">
          <a
            href="https://focuenergia.com/simulador_cotizaciones"
            target="_blank"
            rel="noreferrer noopener"
            className="desktop-link2"
          >
            <div className="desktop-items3">
              <button className="desktop-button">
                <span className="desktop-text24">Cotiza aquí</span>
              </button>
            </div>
          </a>
          <img
            src="/rectangle123-0458-200h.png"
            alt="Rectangle123"
            className="desktop-rectangle1"
          />
        </div>
        <div className="desktop-hero-image">
          <div className="desktop-copy2">
            <div className="desktop-pageslogan">
              <span className="desktop-text25">
                Donde el acceso a la energía primaria es posible!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desktop
