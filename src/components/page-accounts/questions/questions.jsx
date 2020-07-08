import React from 'react'
import '../../../css/reset.css'
import './questions.css'


const Questions = () => {
  return (
    <section className="questions" id="questions">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="questions__title">Frequently Asked Questions</h2>
            <p className="questions__text">If you didn’t find what you were after, <a className="questions__link" href="#"><span
              className="questions__text questions__text--blue">contact us</span></a> directly and we’ll help.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="questions-block">
              <div className="questions__item">
                <h4 className="questions__subsubtitle">What documents should I read before applying?</h4>
                <div className="questions__icon">
                  <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.75 8C15.75 12.2812 12.2812 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.71875 3.71875 0.25 8 0.25C12.2812 0.25 15.75 3.71875 15.75 8ZM8.53125 11.5594L12.7656 7.325C13.0594 7.03125 13.0594 6.55625 12.7656 6.26562L12.2344 5.73438C11.9406 5.44062 11.4656 5.44062 11.175 5.73438L8 8.90938L4.825 5.73438C4.53125 5.44062 4.05625 5.44062 3.76562 5.73438L3.23438 6.26562C2.94062 6.55937 2.94062 7.03437 3.23438 7.325L7.46875 11.5594C7.7625 11.8531 8.2375 11.8531 8.53125 11.5594Z"
                      fill="#52AFEE" />
                  </svg>
                </div>
              </div>
              <div className="questions__item">
                <h4 className="questions__subsubtitle">What commissions does AAG charge?</h4>
                <div className="questions__icon">
                  <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.75 8C15.75 12.2812 12.2812 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.71875 3.71875 0.25 8 0.25C12.2812 0.25 15.75 3.71875 15.75 8ZM8.53125 11.5594L12.7656 7.325C13.0594 7.03125 13.0594 6.55625 12.7656 6.26562L12.2344 5.73438C11.9406 5.44062 11.4656 5.44062 11.175 5.73438L8 8.90938L4.825 5.73438C4.53125 5.44062 4.05625 5.44062 3.76562 5.73438L3.23438 6.26562C2.94062 6.55937 2.94062 7.03437 3.23438 7.325L7.46875 11.5594C7.7625 11.8531 8.2375 11.8531 8.53125 11.5594Z"
                      fill="#52AFEE" />
                  </svg>
                </div>
              </div>
              <div className="questions__item">
                <h4 className="questions__subsubtitle">How do I open an account?</h4>
                <div className="questions__icon">
                  <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.75 8C15.75 12.2812 12.2812 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.71875 3.71875 0.25 8 0.25C12.2812 0.25 15.75 3.71875 15.75 8ZM8.53125 11.5594L12.7656 7.325C13.0594 7.03125 13.0594 6.55625 12.7656 6.26562L12.2344 5.73438C11.9406 5.44062 11.4656 5.44062 11.175 5.73438L8 8.90938L4.825 5.73438C4.53125 5.44062 4.05625 5.44062 3.76562 5.73438L3.23438 6.26562C2.94062 6.55937 2.94062 7.03437 3.23438 7.325L7.46875 11.5594C7.7625 11.8531 8.2375 11.8531 8.53125 11.5594Z"
                      fill="#52AFEE" />
                  </svg>
                </div>
              </div>
              <div className="questions__item">
                <h4 className="questions__subsubtitle">Can I hold multiple currencies in a AAG account?</h4>
                <div className="questions__icon">
                  <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.75 8C15.75 12.2812 12.2812 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.71875 3.71875 0.25 8 0.25C12.2812 0.25 15.75 3.71875 15.75 8ZM8.53125 11.5594L12.7656 7.325C13.0594 7.03125 13.0594 6.55625 12.7656 6.26562L12.2344 5.73438C11.9406 5.44062 11.4656 5.44062 11.175 5.73438L8 8.90938L4.825 5.73438C4.53125 5.44062 4.05625 5.44062 3.76562 5.73438L3.23438 6.26562C2.94062 6.55937 2.94062 7.03437 3.23438 7.325L7.46875 11.5594C7.7625 11.8531 8.2375 11.8531 8.53125 11.5594Z"
                      fill="#52AFEE" />
                  </svg>
                </div>
              </div>
              <div className="questions__item">
                <h4 className="questions__subsubtitle">What markets can I access?</h4>
                <div className="questions__icon">
                  <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.75 8C15.75 12.2812 12.2812 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.71875 3.71875 0.25 8 0.25C12.2812 0.25 15.75 3.71875 15.75 8ZM8.53125 11.5594L12.7656 7.325C13.0594 7.03125 13.0594 6.55625 12.7656 6.26562L12.2344 5.73438C11.9406 5.44062 11.4656 5.44062 11.175 5.73438L8 8.90938L4.825 5.73438C4.53125 5.44062 4.05625 5.44062 3.76562 5.73438L3.23438 6.26562C2.94062 6.55937 2.94062 7.03437 3.23438 7.325L7.46875 11.5594C7.7625 11.8531 8.2375 11.8531 8.53125 11.5594Z"
                      fill="#52AFEE" />
                  </svg>
                </div>
              </div>
              <div className="questions__item">
                <h4 className="questions__subsubtitle">How do I transfer stocks to AAG?</h4>
                <div className="questions__icon">
                  <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.75 8C15.75 12.2812 12.2812 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.71875 3.71875 0.25 8 0.25C12.2812 0.25 15.75 3.71875 15.75 8ZM8.53125 11.5594L12.7656 7.325C13.0594 7.03125 13.0594 6.55625 12.7656 6.26562L12.2344 5.73438C11.9406 5.44062 11.4656 5.44062 11.175 5.73438L8 8.90938L4.825 5.73438C4.53125 5.44062 4.05625 5.44062 3.76562 5.73438L3.23438 6.26562C2.94062 6.55937 2.94062 7.03437 3.23438 7.325L7.46875 11.5594C7.7625 11.8531 8.2375 11.8531 8.53125 11.5594Z"
                      fill="#52AFEE" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Questions