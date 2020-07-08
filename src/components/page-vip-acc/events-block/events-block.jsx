import React from 'react'
import '../../../css/reset.css'
import './events-block.css'

const EventsBlock = () => {
  return (
    <section className="events" id="events">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="events__title">Exclusive events and hospitality</h2>
            <p className="events__text">Receive invitations to unique, market-focused events and once-in-a-lifetime
            experiences as a VIP.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg-3">
            <div className="events-block">
              <div className="events__img events__img--1"></div>
              <div className="events__wrapper">
                <h4 className="events__subsubtitle">Flagship events</h4>
                <p className="events__text events__text--small">Attend our market-focused flagship events at the
                most exclusive
                venues.</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="events-block">
              <div className="events__img events__img--2"></div>
              <div className="events__wrapper">
                <h4 className="events__subsubtitle">Topical debates</h4>
                <p className="events__text events__text--small">Join our insightful, expert-led talks, tailored
                to current market events.</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="events-block">
              <div className="events__img events__img--3"></div>
              <div className="events__wrapper">
                <h4 className="events__subsubtitle">Chef’s tables</h4>
                <p className="events__text events__text--small">Discuss market movements over dinner at some of
                the world’s finest places.</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="events-block">
              <div className="events__img events__img--4"></div>
              <div className="events__wrapper">
                <h4 className="events__subsubtitle">Hospitality</h4>
                <p className="events__text events__text--small">Reserve the best seats at the biggest
                entertainment and sporting events.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsBlock