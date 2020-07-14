import React from 'react'
import './events-block.css'

const EventsSubBlock = ({ eventsBlock }) => {
  return (
    <div className="row">
      {eventsBlock.map(el => {
        return (
          <div className="col-6 col-lg-3" key={el.id}>
            <div className="events-block">
              <div className={`events__img events__img--${el.id}`}></div>
              <div className="events__wrapper">
                <h4 className="events__subsubtitle">{el.title}</h4>
                <p className="events__text events__text--small">{el.text}</p>
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default EventsSubBlock