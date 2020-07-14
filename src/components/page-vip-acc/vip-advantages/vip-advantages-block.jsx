import React from 'react'
import './vip-advantages.css'

const VipAdvantagesBlock = ({ vipAdvantages }) => {
  return (
    <div className="row">
      {vipAdvantages.map((el, i) => {
        return (
          <div className="col-6 col-lg-3" key={el.id}>
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

export default VipAdvantagesBlock