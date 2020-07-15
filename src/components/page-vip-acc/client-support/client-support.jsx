import React from 'react'
import './client-support.css'

import ClientSuppportBlock from './client-support-block'


const ClientSupport = ({ clientSupport }) => {
  return (
    <section className="client-support" id="client-support">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="client-support__title">Around-the-clock priority <br />
              client support</h2>
            <p className="client-support__text client-support__text--big">
              Whether you’re looking to discuss trade ideas with a dedicated sales trader or need technical assistance
              from your relationship manager, our experts are always on hand to take your call.
            </p>
          </div>
        </div>
        <ClientSuppportBlock clientSupport={clientSupport} />
      </div>
    </section>
  )
}

export default ClientSupport