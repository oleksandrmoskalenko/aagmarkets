import React from 'react'
import '../../../css/reset.css'
import './market-price.css'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'


const MarketPrice = () => {
  return (
    <section className="market-price d-flex justify-content-center" id="market-price">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="market-price__title">Profit From Market Ups &#38; Downs</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 col-lg-4 order-lg-0 market-price__wrapper">
            <div className="market-price-block market-price-block--black">
              <h3 className="market-price__subtitle">Market price goes higher</h3>
              <svg className="market-price__svg" height="233" viewBox="0 0 307 233" width="307"
                xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="a" x1="88.609674%" x2="88.609674%" y1="89.901393%" y2="0%">
                  <stop offset="0" stopOpacity="0" />
                  <stop offset=".803535947" stopColor="#01ab27" stopOpacity=".943506" />
                  <stop offset="1" stopColor="#01b529" />
                </linearGradient>
                <linearGradient id="b" x1="62.971802%" x2="62.971802%" y1="100%" y2="-5.426348%">
                  <stop offset="0" stopOpacity="0" />
                  <stop offset=".961802149" stopColor="#11a4e4" stopOpacity=".928289" />
                  <stop offset="1" stopColor="#12b1f6" />
                </linearGradient>
                <g fill="none" fillRule="evenodd" transform="">
                  <g fillRule="nonzero" transform="translate(0 28)">
                    <path d="m141.5 101.5 163-99v102h-163z" fill="url(#a)" />
                    <path d="m141.5 101.5 163-99" stroke="#fff" strokeDasharray="2 2" strokeLinejoin="round" />
                    <path d="m140.5 99.5 163-99" stroke="#1b87d7" strokeDasharray="2 2" strokeLinejoin="round" />
                    <path d="m0 156 8-19 13 19 7.5-9.5 12-3 18.5-18.5 20.5-6.5 19.5 9 19-2.5 14.5-18 1.5 96-134 2z"
                      fill="url(#b)" />
                    <path d="m1 153.5 8-19 13 19 7.5-9.5 12-3 18.5-18.5 20.5-6.5 19.5 9 19-2.5 14.5-18"
                      stroke="#1b87d7" />
                    <path d="m1 155.5 8-19 13 19 7.5-9.5 12-3 18.5-18.5 20.5-6.5 19.5 9 19-2.5 14.5-18" stroke="#fff" />
                    <circle cx="137" cy="104" fill="#fff" r="8" stroke="#077bbd" strokeWidth="3" />
                  </g>
                  <text fill="#077bbd" fontSize="13" fontWeight="bold" letterSpacing="-.07119048">
                    <tspan x="96.997751" y="115">BUY</tspan>
                  </text>
                  <rect fillRule="nonzero" height="19" rx="2" stroke="#007cc3" width="52" x="84.5" y="100.5" />
                  <text fill="#fff" fontSize="13" fontWeight="bold" letterSpacing="-.07119048">
                    <tspan x="266.507906" y="15">SELL</tspan>
                  </text>
                  <rect fillRule="nonzero" height="19" rx="2" stroke="#fff" width="52" x="254.5" y=".5" />
                  <g fill="#fff" fontSize="13" fontWeight="300" letterSpacing="-.07119048">
                    <text>
                      <tspan x="238.237201" y="103">Profit</tspan>
                    </text>
                    <text>
                      <tspan x="16.940712" y="206">Market price</tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="col-12 col-md-12 order-md-3 col-lg-4 order-lg-0 market-price__wrapper">
            <div className="market-price-block market-price-block--text">
              <p className="market-price__text">
                Actively trade in most popular assets, profit from market relies and declines, or hedge your existing
                holdings.
            </p>
              <Nav.Link href="/homepage" className="market-price__link justify-content-center d-flex align-items-center p-0">
                <p className="market-price__link-text">Learn more</p>
                <svg className="market-price__symbol" width="24" height="24" stroke="#52AFEE" strokeWidth="1.1"
                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M8.77249 5.19066L8.15377 5.80935C8.00734 5.95579 8.00734 6.19322 8.15377 6.33969L13.8006 12L8.15377 17.6603C8.00734 17.8068 8.00734 18.0442 8.15377 18.1907L8.77249 18.8094C8.91893 18.9558 9.15637 18.9558 9.30284 18.8094L15.847 12.2652C15.9935 12.1188 15.9935 11.8813 15.847 11.7348L9.30284 5.19066C9.15637 5.04419 8.91893 5.04419 8.77249 5.19066Z"
                    fill="#52AFEE" />
                </svg>
              </Nav.Link>
              <Link to="/registration"><button className="market-price__button">Get Started</button></Link>
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-2 col-lg-4 order-lg-0 market-price__wrapper">
            <div className="market-price-block market-price-block--black">
              <h3 className="market-price__subtitle">Market price goes lower</h3>
              <svg className="market-price__svg market-price__svg--lower" height="185" viewBox="0 0 317 185" width="317"
                xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="c" x1="50%" x2="50%" y1="92.558305%" y2="11.759624%">
                  <stop offset="0" stopColor="#052d3f" stopOpacity="0" />
                  <stop offset="1" stopColor="#01b529" />
                </linearGradient>
                <linearGradient id="d" x1="50%" x2="50%" y1="21.591296%" y2="100%">
                  <stop offset="0" stopOpacity="0" />
                  <stop offset=".10769837" stopColor="#031f2b" stopOpacity=".18775" />
                  <stop offset="1" stopColor="#11a4e4" />
                </linearGradient>
                <g fill="none" fillRule="evenodd" transform="translate(1)">
                  <g fillRule="nonzero" transform="matrix(1 0 0 -1 0 174)">
                    <path d="m144 117.970588 163-99.970588v103h-163z" fill="url(#c)" />
                    <path
                      d="m0 172 8.03018868-19 13.04905662 19 7.5283019-9.5 12.045283-3 18.5698113-18.5 20.5773585-6.5 19.5735849 9 19.0716981-2.5 14.554717-18v-123h-133z"
                      fill="url(#d)" />
                    <path d="m140.5 118.505 166.5-100.01" stroke="#007cc3" strokeDasharray="2 2"
                      strokeLinejoin="round" />
                    <path d="m139.5 116.505 167.5-100.005" stroke="#fff" strokeDasharray="2 2" strokeLinejoin="round" />
                    <path
                      d="m0 172 8.03018868-19 13.04905662 19 7.5283019-9.5 12.045283-3 18.5698113-18.5 20.5773585-6.5 19.5735849 9 19.0716981-2.5 14.554717-18"
                      stroke="#fff" />
                    <path
                      d="m0 174 8.03018868-19 13.04905662 19 7.5283019-9.5 12.045283-3 18.5698113-18.5 20.5773585-6.5 19.5735849 9 19.0716981-2.5 14.554717-18"
                      stroke="#007cc3" />
                    <circle cx="136" cy="122" fill="#000" r="8" stroke="#fff" strokeWidth="3" />
                  </g>
                  <text fill="#077bbd" fontSize="13" fontWeight="bold" letterSpacing="-.07119048">
                    <tspan x="277.997751" y="179">BUY</tspan>
                  </text>
                  <rect fillRule="nonzero" height="19" rx="2" stroke="#007cc3" width="52" x="263.5" y="165.5" />
                  <text fill="#fff" fontSize="13" fontWeight="bold" letterSpacing="-.07119048">
                    <tspan x="159.507906" y="36">SELL</tspan>
                  </text>
                  <rect fillRule="nonzero" height="19" rx="2" stroke="#fff" width="52" x="147.5" y="22.5" />
                  <g fill="#fff" fontSize="13" fontWeight="300" letterSpacing="-.07119048">
                    <text>
                      <tspan x="258.237201" y="97">Profit</tspan>
                    </text>
                    <text>
                      <tspan x="23.940712" y="75">Market price</tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default MarketPrice