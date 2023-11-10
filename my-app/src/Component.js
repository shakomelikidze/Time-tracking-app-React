import React from 'react'
import dots from './images/ellipsis.svg'

const Component = (props) => {
  const {activity, image, className, dailyValue, weeklyValue, monthlyValue, activeButton} = props;
  return (
    <>
      <div className="activity-card">
        {/* coloured side of card */}
        <div className={props.className}>
          <img src={image}></img>
        </div>
        {/* info in the card */}
        <div className="data-card">
          <div class="card-title">
            <p class="card-title-p">{activity}</p>
            <button class="three-dot-btn">
              <img src={dots}></img>
            </button>
          </div>
          {/* time div */}
          <div class="card-info">
            <p className="current-time current-time-work">
              {activeButton === 'daily' && dailyValue}
              {activeButton === 'weekly' && weeklyValue}
              {activeButton === 'monthly' && monthlyValue}
              Hrs
            </p>
          </div>
          {/* info after click on three dot button */}
        </div>
      </div>
    </>
  )
}

export default Component