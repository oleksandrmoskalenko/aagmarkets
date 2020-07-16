import React from 'react'
import AllSpreads from './all-spreads/all-spreads'
import Questions from '../page-accounts/questions/questions'
import Footer from '../page-home/footer/footer'

const SpreadsPage = ({ allSpreads, questions, footer1, footer2, footer3, footer4 }) => {
  return (
    <div className="spreads">
      <AllSpreads allSpreads={allSpreads} />
      <Questions questions={questions} />
      <Footer footer1={footer1} footer2={footer2} footer3={footer3} footer4={footer4} />
    </div>
  )
}

export default SpreadsPage