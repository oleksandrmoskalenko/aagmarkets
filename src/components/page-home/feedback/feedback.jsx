import React, { Component } from 'react'
import '../../../css/reset.css'
import './feedback.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Feedback extends Component {
  render() {
    const { feedback } = this.props,
      settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          }

        ]
      };

    return (
      <section className="feedback" id="feedback">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="w-100 feedback__title text-center">What our clients say</h2>
            </div>
          </div>
          <Slider className="feedback__slider" {...settings}>
            {feedback.map(el => {
              return (
                <div className="col-8 col-md-12" key={el.id}>
                  <article className="feedback__item">
                    <p className="feedback__text">{el.text}</p>
                    <div className="feedback__author d-flex">
                      <div className={`feedback__author-img feedback__author-img--${el.id}`}></div>
                      <div className="feedback-block__wrapper">
                        <div className="feedback__author-name">{el.author}</div>
                        <div className="feedback__author-date">{el.date}</div>
                      </div>
                    </div>
                  </article>
                </div>)
            })}
          </Slider>
        </div>
      </section>
    )
  }
}
