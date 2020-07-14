import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/reset.css'
import './accounts.css'


const Accounts = ({ accounts }) => {
  return (
    <section className="accounts" id="accounts">
      <div className="container">
        <div className="row d-flex justify-content-center">
          {accounts.map(el => {
            return (
              <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center" key={el.type}>
                <div className="w-100 accounts__wrapper">
                  <div className="accounts-block text-center mb-5">
                    <div className="accounts__subsubtitle text-uppercase">{el.type}</div>
                    <div className="accounts__text accounts__text--small">{el.fund}</div>
                    <ul className="accounts__list text-left">
                      <li className="accounts__item">
                        <div className="accounts__icon">
                          <svg width={el.svgNum1} height={el.svgNum1} viewBox={`0 0 ${el.svgNum1} ${el.svgNum1}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d={el.svgPath1}
                              fill={el.svgColour1} />
                          </svg>
                        </div>
                        <p className="accounts__text">{el.text1}</p>
                      </li>
                      <li className="accounts__item">
                        <div className="accounts__icon">
                          <svg width={el.svgNum1} height={el.svgNum1} viewBox={`0 0 ${el.svgNum1} ${el.svgNum1}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d={el.svgPath1}
                              fill={el.svgColour1} />
                          </svg>
                        </div>
                        <p className="accounts__text">{el.text2}</p>
                      </li>
                      <li className="accounts__item">
                        <div className="accounts__icon">
                          <svg width={el.svgNum1} height={el.svgNum1} viewBox={`0 0 ${el.svgNum1} ${el.svgNum1}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d={el.svgPath1}
                              fill={el.svgColour1} />
                          </svg>
                        </div>
                        <p className="accounts__text">{el.text3}</p>
                      </li>
                      <li className="accounts__item">
                        <div className={`accounts__icon ${el.iconClName2}`}>
                          <svg width={el.svgNum2} height={el.svgNum2} viewBox={`0 0 ${el.svgNum2} ${el.svgNum2}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d={el.svgPath2}
                              fill={el.svgColour2} />
                          </svg>
                        </div>
                        <p className={`accounts__text ${el.textClName2}`}>{el.text4}</p>
                      </li>
                      <li className="accounts__item">
                        <div className={`accounts__icon ${el.iconClName1}`}>
                          <svg width={el.svgNum3} height={el.svgNum3} viewBox={`0 0 ${el.svgNum3} ${el.svgNum3}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d={el.svgPath3}
                              fill={el.svgColour3} />
                          </svg>
                        </div>
                        <p className={`accounts__text ${el.textClName1}`}>{el.text5}</p>
                      </li>
                      <li className="accounts__item">
                        <div className={`accounts__icon ${el.iconClName1}`}>
                          <svg width={el.svgNum3} height={el.svgNum3} viewBox={`0 0 ${el.svgNum3} ${el.svgNum3}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d={el.svgPath3}
                              fill={el.svgColour3} />
                          </svg>
                        </div>
                        <p className={`accounts__text ${el.textClName1}`}>{el.text6}</p>
                      </li>
                      <li className="accounts__item">
                        <div className={`accounts__icon ${el.iconClName1}`}>
                          <svg width={el.svgNum3} height={el.svgNum3} viewBox={`0 0 ${el.svgNum3} ${el.svgNum3}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d={el.svgPath3}
                              fill={el.svgColour3} />
                          </svg>
                        </div>
                        <p className={`accounts__text ${el.textClName1}`}>{el.text7}</p>
                      </li>
                    </ul>
                  </div>
                  <Link to="/registration" className="accounts__link"><button className="accounts__button">Create {el.type} Account</button></Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Accounts