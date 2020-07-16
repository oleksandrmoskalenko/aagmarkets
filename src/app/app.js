import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import BootstrapNavbar from '../components/navbar/navbar'
import Homepage from '../components/page-home/homepage'
import AccountsPage from '../components/page-accounts/accounts-page'
import VipAccountsPage from '../components/page-vip-acc/vip-accounts-page'
import ProductsPage from '../components/page-products/products-page'
import SpreadsPage from '../components/page-spreads/spreads-page'
import SignIn from '../components/page-sign-forms/sign-in/sign-in'
import SignUp from '../components/page-sign-forms/sign-up/sign-up'
import ForgotPassword from '../components/page-sign-forms/forgot-password/forgot-password'

import ScrollToTop from '../components/scroll-to-top/scroll-to-top'

import './app.css'
import data from '../db/data.json'

class App extends Component {
  render() {
    const headerHomepage = data[0].headerHomepage,
      vipAdvantages = data[1].vipAdvantages,
      fxTrade = data[2].fxTrade,
      clientSupport = data[3].clientSupport,
      eventsBlock = data[4].eventsBlock,
      feedback = data[5].feedback,
      startTrading = data[6].startTrading,
      whyTrade = data[7].whyTrade,
      benefits = data[8].benefits,
      forexSpreads = data[9].forexSpreads,
      tradeAssets = data[10].tradeAssets,
      signUp = data[11].signUp,
      questions = data[12].questions,
      accounts = data[13].accounts,
      contactUs = data[14].contactUs,
      software = data[15].software,
      freeAccount = data[16].freeAccount,
      footer1 = data[17].footer1,
      footer2 = data[18].footer2,
      footer3 = data[19].footer3,
      footer4 = data[20].footer4,
      allSpreads = data[21].allSpreads

    return (
      <div className="App">
        <Router>
          <div>
            <ScrollToTop />
            <BootstrapNavbar />
            <Route exact path="/">
              <Redirect to="/homepage" />
            </Route>
            <Route path="/homepage" render={() =>
              <Homepage headerHomepage={headerHomepage} tradeAssets={tradeAssets} benefits={benefits} feedback={feedback} startTrading={startTrading} software={software} freeAccount={freeAccount} footer1={footer1} footer2={footer2} footer3={footer3} footer4={footer4} />
            } />
            <Route path="/accounts" render={() =>
              <AccountsPage whyTrade={whyTrade} questions={questions} accounts={accounts} footer1={footer1} footer2={footer2} footer3={footer3} footer4={footer4} />
            } />
            <Route path="/vip-accounts" render={() =>
              <VipAccountsPage vipAdvantages={vipAdvantages} clientSupport={clientSupport} eventsBlock={eventsBlock} questions={questions} footer1={footer1} footer2={footer2} footer3={footer3} footer4={footer4} />
            } />
            <Route path="/products" render={() =>
              <ProductsPage fxTrade={fxTrade} forexSpreads={forexSpreads} questions={questions} contactUs={contactUs} footer1={footer1} footer2={footer2} footer3={footer3} footer4={footer4} />
            } />
            <Route path="/login" render={() =>
              <SignIn />
            } />
            <Route path="/registration" render={() =>
              <SignUp signUp={signUp} />
            } />
            <Route path="/forgot-password" render={() =>
              <ForgotPassword />
            } />
          </div>
          <Route path="/all-spreads" render={() =>
            <SpreadsPage allSpreads={allSpreads} questions={questions} footer1={footer1} footer2={footer2} footer3={footer3} footer4={footer4} />
          } />
        </Router>
      </div>
    );
  }
}

export default App;
