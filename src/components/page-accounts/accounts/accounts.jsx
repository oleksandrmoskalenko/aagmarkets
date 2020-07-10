import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/reset.css'
import './accounts.css'


const Accounts = () => {
  return (
    <section className="accounts" id="accounts">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 d-flex justify-content-center">
            <div className="accounts__wrapper">
              <div className="accounts-block text-center mb-5">
                <div className="accounts__subsubtitle text-uppercase">Basic</div>
                <div className="accounts__text accounts__text--small">USD 2,000 minimum funding</div>
                <ul className="accounts__list text-left">
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">Tight entry prices</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">Best-in-className digital service and support</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">24/5 technical and account support</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon accounts__icon--minus">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 4.25C7.71875 4.25 4.25 7.71875 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.2812 19.75 19.75 16.2812 19.75 12C19.75 7.71875 16.2812 4.25 12 4.25ZM7.875 13.25C7.66875 13.25 7.5 13.0813 7.5 12.875V11.125C7.5 10.9187 7.66875 10.75 7.875 10.75H16.125C16.3313 10.75 16.5 10.9187 16.5 11.125V12.875C16.5 13.0813 16.3313 13.25 16.125 13.25H7.875Z"
                          fill="#BDBDBD" />
                      </svg>
                    </div>
                    <p className="accounts__text accounts__text--minus">Priority local-language customer support</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon accounts__icon--minus">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 4.25C7.71875 4.25 4.25 7.71875 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.2812 19.75 19.75 16.2812 19.75 12C19.75 7.71875 16.2812 4.25 12 4.25ZM7.875 13.25C7.66875 13.25 7.5 13.0813 7.5 12.875V11.125C7.5 10.9187 7.66875 10.75 7.875 10.75H16.125C16.3313 10.75 16.5 10.9187 16.5 11.125V12.875C16.5 13.0813 16.3313 13.25 16.125 13.25H7.875Z"
                          fill="#BDBDBD" />
                      </svg>
                    </div>
                    <p className="accounts__text  accounts__text--minus">Direct access to our trading experts, 24/5</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon accounts__icon--minus">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 4.25C7.71875 4.25 4.25 7.71875 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.2812 19.75 19.75 16.2812 19.75 12C19.75 7.71875 16.2812 4.25 12 4.25ZM7.875 13.25C7.66875 13.25 7.5 13.0813 7.5 12.875V11.125C7.5 10.9187 7.66875 10.75 7.875 10.75H16.125C16.3313 10.75 16.5 10.9187 16.5 11.125V12.875C16.5 13.0813 16.3313 13.25 16.125 13.25H7.875Z"
                          fill="#BDBDBD" />
                      </svg>
                    </div>
                    <p className="accounts__text  accounts__text--minus">1:1 AAG access</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon accounts__icon--minus">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 4.25C7.71875 4.25 4.25 7.71875 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.2812 19.75 19.75 16.2812 19.75 12C19.75 7.71875 16.2812 4.25 12 4.25ZM7.875 13.25C7.66875 13.25 7.5 13.0813 7.5 12.875V11.125C7.5 10.9187 7.66875 10.75 7.875 10.75H16.125C16.3313 10.75 16.5 10.9187 16.5 11.125V12.875C16.5 13.0813 16.3313 13.25 16.125 13.25H7.875Z"
                          fill="#BDBDBD" />
                      </svg>
                    </div>
                    <p className="accounts__text  accounts__text--minus">Exclusive event invitations</p>
                  </li>
                </ul>
              </div>
              <Link to="/registration" className="accounts__link"><button className="accounts__button">Create Basic Account</button></Link>
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-center">
            <div className="accounts__wrapper">
              <div className="accounts-block text-center mb-5">
                <div className="accounts__subsubtitle text-uppercase">Platinum</div>
                <div className="accounts__text accounts__text--small">USD 200,000 minimum funding</div>
                <ul className="accounts__list text-left">
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">Tight entry prices</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">Best-in-className digital service and support</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">24/5 technical and account support</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">Priority local-language customer support</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon accounts__icon--minus">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 4.25C7.71875 4.25 4.25 7.71875 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.2812 19.75 19.75 16.2812 19.75 12C19.75 7.71875 16.2812 4.25 12 4.25ZM7.875 13.25C7.66875 13.25 7.5 13.0813 7.5 12.875V11.125C7.5 10.9187 7.66875 10.75 7.875 10.75H16.125C16.3313 10.75 16.5 10.9187 16.5 11.125V12.875C16.5 13.0813 16.3313 13.25 16.125 13.25H7.875Z"
                          fill="#BDBDBD" />
                      </svg>
                    </div>
                    <p className="accounts__text accounts__text--minus">Direct access to our trading experts, 24/5</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon accounts__icon--minus">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 4.25C7.71875 4.25 4.25 7.71875 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.2812 19.75 19.75 16.2812 19.75 12C19.75 7.71875 16.2812 4.25 12 4.25ZM7.875 13.25C7.66875 13.25 7.5 13.0813 7.5 12.875V11.125C7.5 10.9187 7.66875 10.75 7.875 10.75H16.125C16.3313 10.75 16.5 10.9187 16.5 11.125V12.875C16.5 13.0813 16.3313 13.25 16.125 13.25H7.875Z"
                          fill="#BDBDBD" />
                      </svg>
                    </div>
                    <p className="accounts__text accounts__text--minus">1:1 AAG access</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon accounts__icon--minus">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 4.25C7.71875 4.25 4.25 7.71875 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.2812 19.75 19.75 16.2812 19.75 12C19.75 7.71875 16.2812 4.25 12 4.25ZM7.875 13.25C7.66875 13.25 7.5 13.0813 7.5 12.875V11.125C7.5 10.9187 7.66875 10.75 7.875 10.75H16.125C16.3313 10.75 16.5 10.9187 16.5 11.125V12.875C16.5 13.0813 16.3313 13.25 16.125 13.25H7.875Z"
                          fill="#BDBDBD" />
                      </svg>
                    </div>
                    <p className="accounts__text accounts__text--minus">Exclusive event invitations</p>
                  </li>
                </ul>
              </div>
              <Link to="/registration" className="accounts__link"><button className="accounts__button">Create Platinum Account</button></Link>
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-center">
            <div className="accounts__wrapper">
              <div className="accounts-block text-center mb-5">
                <div className="accounts__subsubtitle text-uppercase">Vip</div>
                <div className="accounts__text accounts__text--small">USD 1,000,000 minimum funding</div>
                <ul className="accounts__list text-left">
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">Tight entry prices</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">Best-in-className digital service and support</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">24/5 technical and account support</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">Priority local-language customer support</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">Direct access to our trading experts, 24/5</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">1:1 AAG access</p>
                  </li>
                  <li className="accounts__item">
                    <div className="accounts__icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
                          fill="#1BB75E" />
                      </svg>
                    </div>
                    <p className="accounts__text">Exclusive event invitations</p>
                  </li>
                </ul>
              </div>
              <Link to="/registration" className="accounts__link"><button className="accounts__button">Create Vip Account</button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accounts