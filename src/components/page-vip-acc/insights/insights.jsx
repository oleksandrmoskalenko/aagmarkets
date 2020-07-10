import React from 'react'
import '../../../css/reset.css'
import './insights.css'


const Insights = () => {
  return (
    <section className="insights" id="insights">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="insights-block text-left">
              <h2 className="insights__title">Expert insights</h2>
              <p className="insights__text">
                Speak directly with our analysts, including our CIO and chief economist. The team will be available to
                discuss asset allocations in line with macro developments, share their views on major asset class, and
                talk through the implications of central bank policies and other market events.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insights