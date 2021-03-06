import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import './questions.css'


const Questions = ({ questions }) => {
  return (
    <section className="questions">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="questions__title">Frequently Asked Questions</h2>
            <p className="questions__text text-center">If you didn’t find what you were after, <HashLink to="/products#contact-us" className="questions__link p-0 d-inline" ><span
              className="questions__text questions__text--blue">contact us</span></HashLink> directly and we’ll help.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Accordion className="questions-block">
              {questions.map((el, i) => {
                return (
                  <Card className="questions__card" key={i}>
                    <Accordion.Toggle as={Card.Header} eventKey={`${i}`} className="questions__item">
                      <h4 className="questions__subsubtitle text-left">{el.question}</h4>
                      <div className="questions__icon" id="in"></div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={`${i}`}>
                      <Card.Body className="questions__card-text">{el.answer}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                )
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Questions