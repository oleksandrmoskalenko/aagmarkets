import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import './contact-us.css'

const ContactUs = ({ contactUs }) => {
  return (
    <section className="contact-us" id="contact-us">
      <div className="h-100 container">
        <div className="h-100 row d-flex justify-content-center">
          <div className="col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="w-100 contact-us__wrapper d-flex justify-content-center">
              <Form className="contact-us-form d-flex flex-column justify-content-around">
                <h2 className="contact-us__title">Contact Us</h2>
                {contactUs.map((el, i) => {
                  return (
                    <Form.Group controlId={el.id} key={i}>
                      <Form.Label className={el.clName}>{el.text} </Form.Label>
                      <Form.Control type={el.type} placeholder={el.placeholder} />
                    </Form.Group>
                  )
                })}
                <Form.Group controlId="formBasicTextarea">
                  <Form.Label className="font-weight-bold d-flex">Message</Form.Label>
                  <Form.Control className="contact-us__text-area" as="textarea" rows="4" placeholder="Your Message" />
                </Form.Group>
                <Button className="w-100 contact-us__button" type="submit">
                  <Nav.Link href="/homepage" className="contact-us__link">
                    Submit
                </Nav.Link>
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs