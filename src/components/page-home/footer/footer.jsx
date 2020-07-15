import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


const Footer = ({ footer1, footer2, footer3 }) => {
  return (
    <div>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="w-100 footer-block footer-block--logo d-flex justify-content-between flex-wrap">
              <div className="col-12 col-md-6 text-center text-md-left">
                <Link to="/homepage" className="footer__link">
                  <img className="footer__img" src={require("./img/footer-logo.png")} alt="footer-logo" />
                </Link>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                <div className="footer__wrapper d-flex align-items-center">
                  <a href="https://www.amazon.com/" className="footer__link">
                    <img className="footer__img footer__img--amazon" src={require("./img/amazon-logo.png")} alt="amazon-logo" />
                  </a>
                  <a href="https://www.metaquotes.net/" className="footer__link">
                    <img className="footer__img footer__img--meta-quotes" src={require("./img/meta-quotes-logo.png")} alt="meta-quotes-logo" />
                  </a>
                  <a href="https://sumsub.com/" className="footer__link">
                    <img className="footer__img footer__img--sumsub" src={require("./img/sum-substance-logo.png")} alt="sum-substance-logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              <p className="footer__text footer__text--white footer__text-wrapper text-left">
                AAG Ltd. © 2020. All rights reserved. <br />
            General information: <u>contact@aagmarkets.com</u> <br />
            Technical support: <u>support@aagmarkets.com</u> <br />
            Suite 48, Beachmont Business Centre, <br />
            Beachmont,Kingstown, St. Vincent <br />
            and the Grenadines
          </p>
            </div>
            <div className="col-12 col-md-7 mt-2 mt-md-5 mt-lg-4 mt-xl-3 footer__text-wrapper">
              <ul className="footer__list d-flex">
                {footer1.map((el, i) => {
                  return (
                    <li className="footer__item" key={i}><Link to="/homepage" className="footer__link"><span className="footer__text footer__text--white">{el.text}
                      <span className="footer__symbol">{el.symbol}</span>
                    </span></Link></li>
                  )
                })}
              </ul>
              <ul className="footer__list d-flex">
                {footer2.map((el, i) => {
                  return (
                    <li className="footer__item" key={i + 4}><Link to="/homepage" className="footer__link"><span className="footer__text footer__text--white">{el.text}
                      <span className="footer__symbol">{el.symbol}</span>
                    </span></Link></li>
                  )
                })}
              </ul>
              <ul className="footer__list d-flex">
                {footer3.map((el, i) => {
                  return (
                    <li className="footer__item" key={i + 8}><Link to="/homepage" className="footer__link"><span className="footer__text footer__text--white">{el.text}
                      <span className="footer__symbol">{el.symbol}</span>
                    </span></Link></li>
                  )
                })}
              </ul>
            </div>
            <div className="col-12 col-md-2 mr-4 mr-md-0">
              <div
                className="w-100 h-100 footer__block d-flex justify-content-center justify-content-md-end align-items-center">
                <a className="footer__link" href="https://facebook.com/">
                  <svg className="footer__img footer__img--facebook" xmlns="http://www.w3.org/2000/svg" width="16" height="25"
                    viewBox="0 0 264 512">
                    <path fill="#FFF"
                      d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z" />
                  </svg>
                </a>
                <a className="footer__link" href="https://linkedin.com/">
                  <svg className="footer__img footer__img--linkedin" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                    viewBox="0 0 24 24">
                    <path fill="#FFF"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="footer-block footer-block--text">
              <p className="footer__text text-uppercase">RISK WARNING</p>
              <p className="footer__text">Remember that CFDs are a leveraged product and can result in the loss of your entire
              capital. Trading CFDs may not be suitable for you. Please ensure you fully understand the risks involved.
              Please consider our Terms and Conditions, Risk Warning, and Privacy Policy before using our services. CFD
            traders do not own or have any rights to the underlying assets.</p>
              <p className="footer__text">AAG Markets is a trademark of AAG Ltd.</p>
              <p className="footer__text">AAG Markets is mainly compensated for its services through the Bid/Ask spread. Check
              our
            Fees &#38; Conditions.</p>
              <p className="footer__text">This website contains general information which doesn’t
              take into account your
              personal
              circumstances.
          </p>
              <div className="footer__spacer"></div>
              <p className="footer__text">Keep in mind that Bitcoin trading with margin may be subject to taxation. You are
              solely
              responsible for withholding, collecting, reporting, paying, settling and/or remitting any and all taxes to
              the
              appropriate tax authorities in such jurisdiction(s) in which You may be liable to pay tax. AAG Markets shall
              not be responsible for withholding, collecting, reporting, paying, settling and/or remitting any taxes
              (including, but not limited to, any income, capital gains, sales, value added or similar tax) which may
              arise
            from Your participation in the Bitcoin trading with margin.</p>
              <div className="footer__spacer"></div>
              <p className="footer__text">Content, research, tools, and coin symbols are for educational and illustrative
              purposes
              only and do not imply a recommendation or solicitation to buy or sell a particular asset or to engage in any
              particular investment strategy it’s merely a window into what we are doing and speculating about currently.
              The projections or other information regarding the likelihood of various investment outcomes are
              hypothetical
              in nature, are not guaranteed for accuracy or completeness, do not reflect actual investment results, do not
              take in to consideration commissions, margin interest and other costs, and are not guarantees of future
              results. All investments involve risk, losses may exceed the principal invested. You alone are responsible
              for
            evaluating the merits and risks associated with the use of our systems, services or products.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer