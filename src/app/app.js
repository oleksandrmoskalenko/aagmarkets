import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import data from '../data.json'

import BootstrapNavbar from '../components/navbar/navbar';
import HeaderHomepage from '../components/page-home/header-homepage/header-homepage';
import Payment from '../components/page-home/payment/payment';
import LeverageTrade from '../components/page-home/leverage-trade/leverage-trade';
import MarketPrice from '../components/page-home/market-price/market-price';
import TradeAssets from '../components/page-home/trade-assets/trade-assets';
import HalalInvesting from '../components/page-home/halal-investing/halal-investing';
import Benefits from '../components/page-home/benefits/benefits';
import Software from '../components/page-home/software/software'
import Feedback from '../components/page-home/feedback/feedback';
import StartTrading from '../components/page-home/start-trading/start-trading';
import FreeAccount from '../components/page-home/free-account/free-account';
import Footer from '../components/page-home/footer/footer';
import HeaderAccounts from '../components/page-accounts/header-accounts/header-accounts'
import WhyTrade from '../components/page-accounts/why-trade/why-trade'
import Accounts from '../components/page-accounts/accounts/accounts'
import Tiers from '../components/page-accounts/tiers/tiers'
import CorpAccount from '../components/page-accounts/corp-account/corp-account'
import Questions from '../components/page-accounts/questions/questions'
import HeaderVipAcc from '../components/page-vip-acc/header-vip-acc/header-vip-acc'
import VipAdvantages from '../components/page-vip-acc/vip-advantages/vip-advantages'
import Prices from '../components/page-vip-acc/prices/prices'
import ClientSupport from '../components/page-vip-acc/client-support/client-support'
import Insights from '../components/page-vip-acc/insights/insights'
import EventsBlock from '../components/page-vip-acc/events-block/events-block'
import VipAccount from '../components/page-vip-acc/vip-account/vip-account'
import HeaderProducts from '../components/page-products/header-products/header-products'
import FxTrade from '../components/page-products/fx-trade/fx-trade'
import ForexSpreads from '../components/page-products/forex-spreads/forex-spreads'
import FxPrices from '../components/page-products/fx-prices/fx-prices'

import SignIn from '../components/page-sign-forms/sign-in/sign-in'
import SignUp from '../components/page-sign-forms/sign-up/sign-up'
import ForgotPassword from '../components/page-sign-forms/forgot-password/forgot-password';

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
      forexSpreads = data[9].forexSpreads

    return (
      <div className="App">
        <Router>
          <div>
            <BootstrapNavbar />
            <Route exact path="/">
              <Redirect to="/homepage" />
            </Route>
            <Route path="/homepage" render={() =>
              <div className="homepage">
                <HeaderHomepage headerHomepage={headerHomepage} />
                <Payment />
                <LeverageTrade />
                <MarketPrice />
                <TradeAssets />
                <HalalInvesting />
                <Benefits benefits={benefits} />
                <Software />
                <Feedback feedback={feedback} />
                <StartTrading startTrading={startTrading} />
                <FreeAccount />
                <Footer />
              </div>
            } />
            <Route path="/accounts" render={() =>
              <div className="accounts">
                <HeaderAccounts />
                <WhyTrade whyTrade={whyTrade} />
                <Accounts />
                <Tiers />
                <CorpAccount />
                <Questions />
                <Footer />
              </div>
            } />
            <Route path="/vip-accounts/" render={() =>
              <div className="vip-accounts">
                <HeaderVipAcc />
                <VipAdvantages vipAdvantages={vipAdvantages} />
                <Prices />
                <ClientSupport clientSupport={clientSupport} />
                <Insights />
                <EventsBlock eventsBlock={eventsBlock} />
                <VipAccount />
                <Questions />
                <Footer />
              </div>
            } />
            <Route path="/products/" render={() =>
              <div className="products">
                <HeaderProducts />
                <FxTrade fxTrade={fxTrade} />
                <ForexSpreads forexSpreads={forexSpreads} />
                <FxPrices />
                <Questions />
                <Footer />
              </div>
            } />
            <Route path="/login" render={() =>
              <div className="login">
                <SignIn />
              </div>
            } />
            <Route path="/registration" render={() =>
              <div className="registration">
                <SignUp />
              </div>
            } />
            <Route path="/forgot-password" render={() =>
              <div className="forgot-password">
                <ForgotPassword />
              </div>
            } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
