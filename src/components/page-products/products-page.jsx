import React from 'react'
import HeaderProducts from './header-products/header-products'
import FxTrade from './fx-trade/fx-trade'
import ForexSpreads from './forex-spreads/forex-spreads'
import FxPrices from './fx-prices/fx-prices'
import Questions from '../page-accounts/questions/questions'
import Footer from '../page-home/footer/footer'
import ContactUs from './contact-us/contact-us'

const ProductsPage = ({ fxTrade, forexSpreads, questions, contactUs }) => {
  return (
    <div className="products">
      <HeaderProducts />
      <FxTrade fxTrade={fxTrade} />
      <ForexSpreads forexSpreads={forexSpreads} />
      <FxPrices />
      <Questions questions={questions} />
      <ContactUs contactUs={contactUs} />
      <Footer />
    </div>
  )
}

export default ProductsPage