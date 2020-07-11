import React from 'react'
import HeaderAccounts from './header-accounts/header-accounts'
import WhyTrade from './why-trade/why-trade'
import Accounts from './accounts/accounts'
import Tiers from './tiers/tiers'
import CorpAccount from './corp-account/corp-account'
import Questions from './questions/questions'
import Footer from '../page-home/footer/footer'

const AccountsPage = ({ whyTrade, questions, accounts }) => {
  return (
    <div className="accounts">
      <HeaderAccounts />
      <WhyTrade whyTrade={whyTrade} />
      <Accounts accounts={accounts} />
      <Tiers />
      <CorpAccount />
      <Questions questions={questions} />
      <Footer />
    </div>
  )
}

export default AccountsPage