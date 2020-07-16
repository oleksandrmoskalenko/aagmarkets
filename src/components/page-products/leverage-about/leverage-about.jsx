import React from 'react'
import './leverage-about.css'


const LeverageAbout = ({ leverage1, leverage2 }) => {
  return (
    <section className="leverage-about" id="leverage-about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="leverage-about__title text-left">How Does Leverage Work?</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {leverage1.map((el, i) => {
              return (
                <p className="leverage-about__text text-left" key={i}>
                  {el.text}
                </p>
              )
            })}
          </div>
        </div>
        <div className="row mt-3">
          {leverage2.map((el, i) => {
            return (
              <div className={`col-12 col-lg-6 leverage-about--${el.color} text-left`} key={i}>
                <div className="leverage-about-block text-left">
                  <div className="leverage-about__subtitle">{el.subtitle}</div>
                  <div className="leverage-about__text">{el.text1}</div>
                  <div className="leverage-about__text">{el.text2}</div>
                  <div className="leverage-about__text">{el.text3}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LeverageAbout