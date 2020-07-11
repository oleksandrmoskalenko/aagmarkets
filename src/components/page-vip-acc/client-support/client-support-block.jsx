import React from 'react'
import '../../../css/reset.css'
import './client-support.css'

const ClientSupportBlock = ({ clientSupport }) => {
  return (
    <div className="row">
      {clientSupport.map((el, i) => {
        return (
          <div className="col-12 col-lg-4" key={i}>
            <div className="client-support-block text-left">
              <img className="client-support__img" src={require(`./img/client-support-${el.img}.png`)} alt={`${el.img}`} />
              <div className="client-support__wrapper">
                <h4 className="client-support__subsubtitle">{el.title}</h4>
                <p className="client-support__text">{el.text}</p>
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default ClientSupportBlock