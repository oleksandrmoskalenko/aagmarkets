import React, { Component } from 'react'
import '../../../css/reset.css'
import './client-support.css'

export default class ClientSupportBlock extends Component {
  render() {
    const { clientSupport } = this.props

    return (
      <div className="row">
        {clientSupport.map(el => {
          return (
            <div className="col-12 col-lg-4">
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
}