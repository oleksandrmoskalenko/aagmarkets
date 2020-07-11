import React from 'react'
import '../../../css/reset.css'
import './events-block.css'

import EventsSubBlock from './events-sub-block'

const EventsBlock = ({ eventsBlock }) => {
  return (
    <section className="events" id="events" >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="events__title">Exclusive events and hospitality</h2>
            <p className="events__text">Receive invitations to unique, market-focused events and once-in-a-lifetime
              experiences as a VIP.</p>
          </div>
        </div>
        <EventsSubBlock eventsBlock={eventsBlock} />
      </div>
    </section>
  )
}

export default EventsBlock