import React from 'react'
import HeaderProducts from './header-products/header-products'
import FxTrade from './fx-trade/fx-trade'
import LeverageAbout from './leverage-about/leverage-about'
import ForexSpreads from './forex-spreads/forex-spreads'
import FxPrices from './fx-prices/fx-prices'
import Questions from '../page-accounts/questions/questions'
import Footer from '../page-home/footer/footer'
import ContactUs from './contact-us/contact-us'

const ProductsPage = ({ fxTrade, forexSpreads, questions, contactUs, footer1, footer2, footer3, footer4, leverage1, leverage2 }) => {
  return (
    <div className="products">
      <HeaderProducts />
      <FxTrade fxTrade={fxTrade} />
      <LeverageAbout leverage1={leverage1} leverage2={leverage2} />
      <ForexSpreads forexSpreads={forexSpreads} />
      <FxPrices />
      <Questions questions={questions} />
      <ContactUs contactUs={contactUs} />
      <Footer footer1={footer1} footer2={footer2} footer3={footer3} footer4={footer4} />
    </div>
  )
}

export default ProductsPage