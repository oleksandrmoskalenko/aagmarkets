import React, { Component } from 'react'
import '../../../css/reset.css'
import './vip-advantages.css'

export default class VipAdvantagesBlock extends Component {
  render() {
    const { vipAdvantages } = this.props

    return (
      <div className="row">
        {vipAdvantages.map((el, i) => {
          return (
            <div className="col-6 col-lg-3">
              <div className="vip-advantages-block">
                <div className={`vip-advantages__icon vip-advantages__icon--${el.id}`}></div>
                <h4 className="vip-advantages__subsubtitle">{el.title}</h4>
                <p className="vip-advantages__text">{el.text}</p>
              </div>
            </div>
          )
        })
        }
      </div>
    )
  }
}