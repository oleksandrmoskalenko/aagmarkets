import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/reset.css'
import './free-account.css'

const FreeAccount = () => {
  return (
    <section className="free-account" id="free-account">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="free-account__title">Open a Free Account and Trade with 888x Leverage Now</h2>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-lg-4 text-lg-left">
            <div className="free-account-block">
              <ul className="free-account__list">
                <li className="free-account__item">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1BB75E" d="M19.75 12C19.75 16.2802 16.2802 19.75 12 19.75C7.71978 19.75 4.25 16.2802 4.25 12C4.25 7.71978 7.71978 4.25 12 4.25C16.2802 4.25 19.75 7.71978 19.75 12ZM11.1036 16.1036L16.8536 10.3536C17.0488 10.1583 17.0488 9.84172 16.8536 9.64647L16.1465 8.93937C15.9512 8.74409 15.6346 8.74409 15.4393 8.93937L10.75 13.6287L8.56066 11.4393C8.36541 11.2441 8.04881 11.2441 7.85353 11.4393L7.14644 12.1464C6.95119 12.3417 6.95119 12.6583 7.14644 12.8535L10.3964 16.1035C10.5917 16.2988 10.9083 16.2988 11.1036 16.1036Z" />
                  </svg>
                  <div className="free-account__text">Leading trading platform</div>
                </li>
                <li className="free-account__item">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1BB75E" d="M19.75 12C19.75 16.2802 16.2802 19.75 12 19.75C7.71978 19.75 4.25 16.2802 4.25 12C4.25 7.71978 7.71978 4.25 12 4.25C16.2802 4.25 19.75 7.71978 19.75 12ZM11.1036 16.1036L16.8536 10.3536C17.0488 10.1583 17.0488 9.84172 16.8536 9.64647L16.1465 8.93937C15.9512 8.74409 15.6346 8.74409 15.4393 8.93937L10.75 13.6287L8.56066 11.4393C8.36541 11.2441 8.04881 11.2441 7.85353 11.4393L7.14644 12.1464C6.95119 12.3417 6.95119 12.6583 7.14644 12.8535L10.3964 16.1035C10.5917 16.2988 10.9083 16.2988 11.1036 16.1036Z" />
                  </svg>
                  <div className="free-account__text">Zero fees</div>
                </li>
                <li className="free-account__item">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1BB75E" d="M19.75 12C19.75 16.2802 16.2802 19.75 12 19.75C7.71978 19.75 4.25 16.2802 4.25 12C4.25 7.71978 7.71978 4.25 12 4.25C16.2802 4.25 19.75 7.71978 19.75 12ZM11.1036 16.1036L16.8536 10.3536C17.0488 10.1583 17.0488 9.84172 16.8536 9.64647L16.1465 8.93937C15.9512 8.74409 15.6346 8.74409 15.4393 8.93937L10.75 13.6287L8.56066 11.4393C8.36541 11.2441 8.04881 11.2441 7.85353 11.4393L7.14644 12.1464C6.95119 12.3417 6.95119 12.6583 7.14644 12.8535L10.3964 16.1035C10.5917 16.2988 10.9083 16.2988 11.1036 16.1036Z" />
                  </svg>
                  <div className="free-account__text">Zero commission</div>
                </li>
                <li className="free-account__item">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1BB75E" d="M19.75 12C19.75 16.2802 16.2802 19.75 12 19.75C7.71978 19.75 4.25 16.2802 4.25 12C4.25 7.71978 7.71978 4.25 12 4.25C16.2802 4.25 19.75 7.71978 19.75 12ZM11.1036 16.1036L16.8536 10.3536C17.0488 10.1583 17.0488 9.84172 16.8536 9.64647L16.1465 8.93937C15.9512 8.74409 15.6346 8.74409 15.4393 8.93937L10.75 13.6287L8.56066 11.4393C8.36541 11.2441 8.04881 11.2441 7.85353 11.4393L7.14644 12.1464C6.95119 12.3417 6.95119 12.6583 7.14644 12.8535L10.3964 16.1035C10.5917 16.2988 10.9083 16.2988 11.1036 16.1036Z" />
                  </svg>
                  <div className="free-account__text">Tight spreads</div>
                </li>
              </ul>
              <Link to="/registration"><button className="free-account__button">Open Free Account</button></Link>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="free-account__img"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeAccount