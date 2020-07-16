import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './sign-up.css'
import { Link } from 'react-router-dom'

const SignUp = ({ signUp }) => {
  return (
    <section className="sign-up">
      <div className="h-100 container">
        <div className="h-100 row d-flex justify-content-center">
          <div className="col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="w-100 sign-up__wrapper d-flex justify-content-center">
              <Form className="sign-up-form d-flex flex-column justify-content-around">
                <h2 className="sign-up__title">Sign Up</h2>
                {signUp.map((el, i) => {
                  return (
                    <Form.Group controlId={el.id} key={i}>
                      <Form.Label className={el.clName}>{el.text}</Form.Label>
                      <Form.Control type={el.type} placeholder={el.placeholder} />
                    </Form.Group>
                  )
                })}
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Link to="/homepage"><Button className="w-100 sign-up__button" type="submit">
                  Submit
                </Button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp