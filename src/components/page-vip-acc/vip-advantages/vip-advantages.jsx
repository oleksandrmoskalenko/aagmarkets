import React from 'react'
import './vip-advantages.css'

import VipAdvantagesBlock from './vip-advantages-block'


const VipAdvantages = ({ vipAdvantages }) => {
  return (
    <section className="vip-advantages position-relative" id="vip-advantages">
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

export default VipAdvantages
