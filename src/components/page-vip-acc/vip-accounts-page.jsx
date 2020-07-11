import React from 'react'
import HeaderVipAcc from './header-vip-acc/header-vip-acc'
import VipAdvantages from './vip-advantages/vip-advantages'
import Prices from './prices/prices'
import ClientSupport from './client-support/client-support'
import Insights from './insights/insights'
import EventsBlock from './events-block/events-block'
import VipAccount from './vip-account/vip-account'
import Questions from '../page-accounts/questions/questions'
import Footer from '../page-home/footer/footer'

const VipAccountsPage = ({ vipAdvantages, clientSupport, eventsBlock }) => {
  return (
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
  )
}

export default VipAccountsPage