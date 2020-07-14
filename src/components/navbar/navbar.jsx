import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

import './navbar.css'

const BootstrapNavbar = () => {
  return (
    <div className="navigation fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-12 navigation__small">
            <Navbar variant="dark" expand="lg">
              <Navbar.Brand href="/homepage">
                <svg className="navigation__logo" width="147" height="64" viewBox="0 0 147 64" fill="none"
                  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="147" height="64" fill="url(#pattern0)" />
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0" transform="translate(0 -0.00354567) scale(0.00769231 0.0176683)" />
                    </pattern>
                    <image id="image0" width="130" height="57"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAA5CAYAAAD6DvNLAAARDklEQVR4Ae1dC/RuxRSffW6hVCKKRMkrlLxKUoiISLUuCumhJa8oVpQWKfKMUuT9SC/JI7SoUB5JlCQKKbf0kIq6lUia38/6fe357vnOdx5zzv+7t2t1z1rfOnNm9uy9Z86cmT1779lfAPBrkk8Ky667dQ8UJE8leSbJ7e/WPXE3b7yR1O/3IYRHmdkOZvb1/4c+Ed8hhIeHEHRPl9K3mtnVKWNx3EmuFEJYM4TAEn7RvtbMbirlzSRJ8gEhhLX998AQwn0BLF8Uhej/K4RwfQhBbb4yhHCZmd02iDDJTQDcAeA/JF8+CMkSrkTytQD+AeCG0u9GAAtIPmZxshNjPAGAaFVpf5fkcrOgTXIdkq8H8G21Se+HHReAmwH8Jsb4eZIvIXn/3ryQ3EN0AIDku0mu0BvJEqpA8kEArmrqF72oxcUKyW2b6Hr+bnOhTXKDGOOnAFzbQaezGMCfY4wfIvmIXjzFGA9K2AGcTfJlJO/ThITkaiQ3JrlrjPH9McYvxBg/SXJPkpq2F8sVY/xY4rPuDiCS3GrWxLUkAPhtHc2U5zNS7y9R/Rxj/ACAmxKuWd0BXE/yXSTvnd0neqFlBgD8geRRJPf3F7xvjPHjAE4FcKl3ernKKO3E98kmnAlI8skA/jVFsJIB4ByS98pEmwVG8u0VMrWPeqFZCB2I5FOc31p8s8oE8BOSj8/mjeS+OWtSDoMxxo9kE+4AlIAIQOtw7rVnB8rsYpJrA7guh7B/1Y/LQU7yxQD+noN3FjAA/kbyhTm8jWC0nfRpbs70fZZ5kUY+yftmM1EBdAEomx+XIx5UQTPo0QWwPrS/2UWI5HwA/85GOiNAp7ljF3/jcpJrxRiPnNW6pWUEwJ9ijMeTfKWEvjGxjgTJlQFc1LcvYoxHdKDuLCa5GYD/9qHtQvfWTchJbgHglp44tUs5H8APfDdxMskfA7jYd3x90Al28yb+avNJri9BEsDPcqfHHI4AXKGBRvLptYRLmS6j5KCdgPHR/5QSql5JkvPU2RNIMx9ca7tilSDJhwG4PAeN5CEAX9O2nuSjSN6zBt+qJJ9Ici+XAzpRS8YjKZ3EsEuN0Ggm+QqSbya5jwuPvUZ3mVN9bQC+p/WSZFHljOS6c1lHAZziCqgq6s5nkjuXeR2Q3rtMRO0DoC+58wJwknZl5fpdaVcQbg3gR00EnL6UYrO7SD5Y6+fAqWmKVwCna0CUOYwxfmkKsJQB4EopU0pZdcmXlXHmpLU91l68DlnKA/DHlK67A7iG5EMSPZK71MGV87wv9x46eEWL5D30kQK4tYL7G722kYnxuruPuq1ijF8hubBMaFZp/4o3J/nctvXZt6/PccVJI3kAv2/TidS1s7qVriKXvEPy0QDOq5aVn6Vb8ZezKoBLymXVNIDbSL60jp8heSS3BHC16EjRpgEyBM9UHZLPBvD9agMWxzOA27uWBA1GMan1rk3b6Py9c6pBDRkkH5shJO/qtLdra7+/3Md3LTMuYM5JM1nXHJJPcyXcbPQq0k4l/YKmPOn6OzpA++6jAJzmjWwD710mfb++yNR46ebbkPigytJ4uoDWhk4C5MiuoBkSwHfagAGc0aU0SjNHas9SeSf5VjVUW54Y46EkX+DrX237XVe+UWqMpiiSv6oFHpipnUzCr7skagC/aEMXY/xyuU5dmqSELdlcai9fqia2XtLY9d0OlpED+AvJ1ev4WWrySK6RXjqAy2KMn83o8A+rAdoa+tZH27B7yB5R7oChaV+fp5RTLlPI1lB7+Yy2RVPnytiWseZ/vq6+tKi1RPMy96/DuVTluUYwrzmLoHbwKfMCz9JssIEaFmP8xCKwwalXNnWSK6waEQM4q0lo0l68seKdM6KWO/kGTF3+wejL7nW5LLLeFMKlKUMmzL7Coa/dz1Y7yuuiT3+jTiR5AIBz26bgpt6UZq1O35D6TYoX56EJhfJfk+DTXVthAH9tqyTDU4KvuwtvR/2pYrf0zsSPoY6nOedpGyPt3xTnLRkAvp5M0NJ2VadZ1xM8LTEna2KM8XDpAlrQjot8jz2un/BU7yQPHFeqSdStya7lrIG+M8tN0K2KGJLL+4zTiKdaEGP8YpX/peKZ5CrS0VcZbnt20/BeagDJh8YYj/ZtU201V7/uk4xQJKUmfUebzkCIYoyfzukk4XU5opa+4zok4SL51DZ+HUmWX6fbETo9ikqMvTvxcVfdy/5+Ix7k0UzyE2bW+dUlpkn+2cz2MLMzXPX8MTOTn13nRVJm0WOKojg8hCAL5SfNbErNLEQk5RO4kZnJN6/zEi8hhOOaAEnebmZPNrMLtfyZ2XNbYE82s23NrOyn2AQuOUht2qkRYLLg7WY2HpSTRfVPsv8AeItW33qIXrlxAtq1UH1s4wt95rifEHVNx6UvYCqpPX5VHToFRL51guGOB9frS56ovVwBtUaXedv5ekIHuYliLY9depYSU9mKrkSEpD6amV0J7+ju7kydyDV9xxg/J2OQKspZNMZ4XGfFOQDIKXOIH2XHlP9q1z202gtijB+d6KjMB5LvzGnyEEUSyefn4M6FmWgSyU27KrrOfjSFklxTa3bGl9yFNqf8BRPM9niQM2iVgAQ6oega/C4sr9aD3BhUspb3V5X8xLO0jn0NTLMcCBLAJ2QEqUxJfs3Mthu3ppQgea6Zba9zA3InJ/neXFmghKZ3EsCJRVHIff2DIYSV9f46kMjn//wQwofNTBrCh5A8x8xG9nfJnGb2DJ0DIHmBmU0ppkr4dw8hHA/gsBCCHHm71uTliqK4MITwfqctA9KJJXxTSZLXu6ySJfsIgQZCCOGUKWQDMiR7TVVzpciU3hzAP2WIUYUY4yFpSLtkfmKTE2uCG3p38/K6McaDe+KYMDuTlFk3XUd5O45JGXV3AD93uL60x0KiK9XkD9F1acBlXzOeEfTRTF/ulTNflj1X+pwvQVCQJHdKLQLwQwmYMcZjU96s7+5i/5g+y48k9mqrSK4oPYAP6LXkptU2eL1sM1dOTdj029oYY/xqDW15KXd5XkvzOuV9VMWVnuWA2sZHnzKZpyeWhkSkfHcN3nJmdrvy5bYVQnimtK1+zEpl2b6HZdxdaZILtF0keayZZckIPs1ubGaXV/H7+c5HaKsmW4mZPbUKk54BHD1v3rxd5DVtZo2+hwled5I3CKeZXVrOV1peXEVRdHlV72VmWT6WmrlDCDJ8dS1V8v7auCiKtp1JF1+TzdFMkSP89BmNHbA7+iGbDrCJ4s4tZjrVNVGr9ODbPs0aOuDT59pvsscWPUmwzvCXkJPP2GK7qPbcUpqlmhrhM2S+nUMzg2SDWbmkNTGW8t3nTmcJunT/qYpM5DJBtx7Vk6k3Q22uwzzSTDYeqxsT9YRrSltPEvkBoWrViWd3fXvk3F79otokXzdBoPIA4FuC7lwaBOTboM8URZHvC7+Il94pkneYmYxWvwshbBJCGC1LHYikjfyTmV3RBhdjPKwoigmH0jI8yYu1HIUQZATS0pFL+9K65aiC+14kf+r4y0UTaZJ/NLOdzezciYKeDzr2R/IbZlY7QDUmzOx5ZvbDTtRuffxpZSAt1kc5q3YyNgDAjWBdgt8OA1BnV9HLybG4+vKkLfogq6R8QLpc7QB8M0t/IV+3LmfLWY8IPzcx0lhm924GoG/jWt3I3dc/a5bMINkI0rZmV/vTrbXzcx1v3Zrb6vUtGm6mH4cPaGy0u5YdvyQURpUe29/Meh0irdSvffQdQ+MxNJL/MbPN5zod1xKvZJKUcPYLV1BVSusftWSRPKsoCi0XC0IICsghY5EcUuXitoGfXNrUzFrlJKfwRjMbeVfXU/RcOY5UR+fifvYjbau0Mjag0I/LXdjGv7ymBqAeXCXG+J42fnLK2vQgbfVzTfmjxrkz5pI+oDl/cM+2VCS5X1vHuN//g1tQzLyI5P2W9LLrfXCinGd6NcjjIrT14czK/Lh741LVi/ESsELQeKyGNl7fVKqyxJIkX9XG1KzL3GKcrb0cd4Ri8Eh9rFhBZaYkjbqrVzl7cNrVr08cE55hIsNrWqrdnDV1hlzdicr9JXTEb3FfUlSNvMeaGpH1BZKUgkM/TZ/aV/8yhKBp/OCEWMKW9vEhBAk1FxdFoWBTq5iZDFXzzayRFoAj5s2b18pootPnTvIZJE83s9otmHrfzF5oZjOx4vXhLcFqZ0byJ2bWb7pOCFrusrJKj1AUhSyhF7SADi/yQ5Y69KKwOruS3LDuy8qw98ukPXNbhSvBZCxru1rNw8N7p1/NGONn2pjsW+ZnT4Rzs1xOar+UnMpuhDq0DdaDbUlLd3aDcUQGqyPN7Jo2PAPL5Fqm4BYjB5QKDs1O/zazAyr5d8ljURTvk8Nvyd+hMLOpw6ou5FVnVmlhFVbv6qIoLgohnGdm5xdFcV2fxlSR9qnbCSsjlYDMbNI5srPm3AHUaWb237ljumswuNW3TFzvqrp8KE8D4f+2neUGLksv64FlPbCsB5b1wLIeWNYDS18PtAqLbgKV7kAuWLck9uVt40JKL8k01S/fU2QvM/tbOb9v2uMCyX1LHs6K0D6YN9kmQggKo3uNIp173AId4rm8b+RzF/q0PU67APX5jWZ2Y582ltqXXNPUTvGX4y8xQcrd3KTfubLOrW4CWA/SDShSZ/kAhmIvSkeuyFxTFXpmeLibizzM75x0CSS3kSpZrle6+958KrRdDosKcePmcFn01pMW1W33tQ4ebThdn3GmzL4K9ScPr2qAj7b6qUxuczqb6W1UvEWdSFs/lefePdzvpdJNuLfZyEmn9oxhCel6ZraGzjmUQr5vYWaK9r1+OsBagu+b3FqaRzOTWfZFfStX4Fcws/uTlFHltKIo9gghDA1KtZKb39clqbOT0pAeYGa3VmjmPGoGkI5AZxcONLODiqI4I6diBUYxsY8MIWhwLzQznRXV/zT0ugC8MYQgf49X6VwEgO4zqu5KnhRb24qiIn76aFJcxdE5h16cOLDr2fWl6Gu7TGcIavbO2ahL5xflgq6ZDEO+PBFMzq2aqRTQS2GCshmpAMqhRCH63Onlof4/DKtWwLIfdY5E8Z2yK1QAS8fw3lApan70MK9XSWul2EPu+CkDVIqFNDgUvkdZly5czpW7u/vWYA/eNBDkcKr4TW4o6xWsMvVEGgga8Dkxl1K9ursPBIX2G18K21cH25XnfxOgiPgndcE2lftSpairapv+7mCkXW5cGvywhQxN+t+GE8xsyxDCa0MIWicPJynhMSsCeR1TABT6RtPmwhDCzfoQAegY+1yvVc1sdTPbzczOmQsyP6egw6aDZz6nvzxJnSbSaaY9iqIY+iJbhfuctkodrXMaAI4tikIhexUYrXEcaHqUK7n+REKeShvri9VpIw/zooikC4Z+Le4qftn4E/GElgg5bOQ0qAqTZgQ5oUio6vufCWV8fq5TXClc38K2mEvlenVpnxEUgOzYuvI+ee5pNdcZYc0UCdaj26id6zSPhBDWMTO5jf0hhKDRfImZrWhmOvnzjxDCdWb2hNbR1NzKbcxMDiPvCyHIa3gHAAcrL4SwTXO11pKRXSOEoH+sO7ooCnkl9YppUMKejHHyK9zbzDYFMBHKrwTbldRXLCPSsxQiyMPzDG2jaMlHMW1Fu2hPlGuWV9/oQLCWY/k6ktSfgzVvQf0PJRQRbTT9e1gbmXVH06QH31QE1sa/+pngwh/kAuCh/3Vucuwto7TOUnpH9Z4CPaze7/TyfTZTWFz9N9UQXC/xeEkbim0/+j9ue127mvJ8XT/JBc/L3aHnbU3wbfnSJciTS2t7G1xbmW+zFSFGlyLA7Sz4/wEw1O/Kxh3FlwAAAABJRU5ErkJggg==" />
                  </defs>
                </svg>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="/homepage" className="navigation__link">Home Page</Link>
                  <Link to="/accounts" className="navigation__link">Accounts</Link>
                  <Link to="/vip-accounts" className="navigation__link">VIP Accounts</Link>
                  <Link to="/products" className="navigation__link">Products</Link>
                </Nav>
                <div className="navigation__block d-flex align-items-center justify-content-center">
                  <Link to="/login"><button className="navigation__button navigation__button--login">Login</button></Link>
                  <Link to="/registration"><button className="navigation__button navigation__button--register">Register</button></Link>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div >
  )
}
export default BootstrapNavbar