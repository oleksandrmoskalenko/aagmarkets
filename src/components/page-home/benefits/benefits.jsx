import React from 'react'
import './benefits.css'


const Benefits = ({ benefits }) => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="row">
          {benefits.map(el => {
            return (
              <div className="col-4" key={el.id}>
                <div className="benefits-block">
                  <div className={`benefits__icon benefits__icon--${el.id}`}></div>
                  <h4 className="benefits__subsubtitle">{el.title}</h4>
                  <p className="benefits__text">{el.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits