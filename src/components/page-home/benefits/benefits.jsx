import React, { Component } from 'react'
import '../../../css/reset.css'
import './benefits.css'


export default class Benefits extends Component {
  render() {
    const { benefits } = this.props

    return (
      <section className="benefits" id="benefits">
        <div className="container">
          <div className="row">
            {benefits.map(el => {
              return (
                <div className="col-4">
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
}