import React from 'react'
import dots from './images/ellipsis.svg'

const Component = (props) => {
  const {activity, image, className, dailyValue, weeklyValue, dailyYesterday} = props;
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
            <p class="current-time current-time-work">{dailyValue}Hrs</p>
            <p class="whole-time whole-time-work">Yesterday - {dailyYesterday}Hrs</p>
          </div>
          {/* info after click on three dot button */}
          <div class="after-click-div">
            <ul class="theme-card-list">
              <li>Rename</li>
              <li>Save as PDF</li>
              <li>Delete</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Component