import React from 'react';
import HeaderHomepage from './header-homepage/header-homepage';
import Payment from './payment/payment';
import LeverageTrade from './leverage-trade/leverage-trade';
import MarketPrice from './market-price/market-price';
import TradeAssets from './trade-assets/trade-assets';
import HalalInvesting from './halal-investing/halal-investing';
import Benefits from './benefits/benefits';
import Software from './software/software'
import Feedback from './feedback/feedback';
import StartTrading from './start-trading/start-trading';
import FreeAccount from './free-account/free-account';
import Footer from './footer/footer';

const Homepage = ({ headerHomepage, tradeAssets, benefits, feedback, startTrading }) => {
  return (
    <div className="homepage">
      <HeaderHomepage headerHomepage={headerHomepage} />
      <Payment />
      <LeverageTrade />
      <MarketPrice />
      <TradeAssets tradeAssets={tradeAssets} />
      <HalalInvesting />
      <Benefits benefits={benefits} />
      <Software />
      <Feedback feedback={feedback} />
      <StartTrading startTrading={startTrading} />
      <FreeAccount />
      <Footer />
    </div>
  )
}

export default Homepage