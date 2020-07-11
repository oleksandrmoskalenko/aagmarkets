import React, { Component } from 'react'
import '../../../css/reset.css'
import './header-homepage.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'


export default class HeaderHomepage extends Component {
  render() {
    const { headerHomepage } = this.props,
      settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        dots: true,
        arrows: false,
      };
    return (
      <header className="header-homepage" id="header-homepage" >
        <div className="container">
          <Slider {...settings}>
            {headerHomepage.map(el => {
              return (
                <div className="row d-flex" key={el.id}>
                  <div className="col-6 header-homepage-block">
                    <h2 className="header-homepage__title">{el.title}</h2>
                    <h3 className="header-homepage__subtitle">{el.subtitle}</h3>
                    <Link to="/registration"><button className="header-homepage__button">Open Free Account</button></Link>
                    <p className="header-homepage__text">It only takes 30 seconds</p>
                  </div>
                  <div className="col-6 header-homepage-block">
                    <div className={`header-homepage__img header-homepage__img--${el.id}`}></div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </header>
    )
  }
}