import React, { Component } from 'react'
import '../../../css/reset.css'
import './vip-advantages.css'

import VipAdvantagesBlock from './vip-advantages-block'


export default class VipAdvantages extends Component {
  render() {
    const { vipAdvantages } = this.props

    return (
      <section className="vip-advantages position-absolute" id="vip-advantages">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="vip-advantages__title">Advantages of being a VIP</h2>
            </div>
          </div>
          <VipAdvantagesBlock vipAdvantages={vipAdvantages} />
        </div>
      </section>
    )
  }
}
