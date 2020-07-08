import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import BootstrapNavbar from '../components/navbar/navbar';
import HeaderHomepage from '../components/page-home/header-homepage/header-homepage';
import Payment from '../components/page-home/payment/payment';
import LeverageTrade from '../components/page-home/leverage-trade/leverage-trade';
import MarketPrice from '../components/page-home/market-price/market-price';
import TradeAssets from '../components/page-home/trade-assets/trade-assets';
import HalalInvesting from '../components/page-home/halal-investing/halal-investing';
// import Benefits from '../components/benefits/benefits';
import Software from '../components/page-home/software/software'
import Feedback from '../components/feedback/feedback';
// import StartTrading from '../components/start-trading/start-trading';
import FreeAccount from '../components/page-home/free-account/free-account';
import Footer from '../components/page-home/footer/footer';
import HeaderAccounts from '../components/page-accounts/header-accounts/header-accounts'
import WhyTrade from '../components/page-accounts/why-trade/why-trade'
import Accounts from '../components/page-accounts/accounts/accounts'


import Questions from '../components/page-accounts/questions/questions'
import HeaderVipAcc from '../components/page-vip-acc/header-vip-acc/header-vip-acc'




import EventsBlock from '../components/page-vip-acc/events-block/events-block'
import VipAccount from '../components/page-vip-acc/vip-account/vip-account'
import HeaderProducts from '../components/page-products/header-products/header-products'
import FxTrade from '../components/page-products/fx-trade/fx-trade'
import ForexSpreads from '../components/page-products/forex-spreads/forex-spreads'
import FxPrices from '../components/page-products/fx-prices/fx-prices'



import SignIn from '../components/page-sign-forms/sign-in/sign-in'
import SignUp from '../components/page-sign-forms/sign-up/sign-up'
import ForgotPassword from '../components/page-sign-forms/forgot-password/forgot-password';

function App() {
  return (
    <div className="App">
      <BootstrapNavbar />
      <Router>
        <div>
          <Route path="/homepage" render={() =>
            <div className="homepage">
              <HeaderHomepage />
              <Payment />
              <LeverageTrade />
              <MarketPrice />
              <TradeAssets />
              <HalalInvesting />
              {/* <Benefits /> */}
              <Software />
              <Feedback />
              {/* <StartTrading /> */}
              <FreeAccount />
              <Footer />
            </div>
          } />
          <Route path="/accounts" render={() =>
            <div className="accounts">
              <HeaderAccounts />
              <WhyTrade />
              <Accounts />
              {/* <Tiers /> */}
              {/* <CorpAccount /> */}
              <Questions />
              <Footer />
            </div>
          } />
          <Route path="/vip-accounts" render={() =>
            <div className="vip-accounts">
              <HeaderVipAcc />
              {/* <VipAdvantages /> */}
              {/* <Prices /> */}
              {/* <ClientSupport /> */}
              {/* <Insights /> */}
              <EventsBlock />
              <VipAccount />
              <Questions />
              <Footer />
            </div>
          } />
          <Route path="/products" render={() =>
            <div className="products">
              <HeaderProducts />
              <FxTrade />
              <ForexSpreads />
              <FxPrices />
              <Questions />
              <Footer />
            </div>
          } />

          <Route path="/other" render={() =>
            <div className="other">
              <SignUp />
              <ForgotPassword />
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

export default App;
