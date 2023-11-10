import React from 'react';
import dots from './images/ellipsis.svg';

const Component = (props) => {
  const { 
    activity, image, className, 
    dailyValue, weeklyValue, monthlyValue, 
    activeButton 
  } = props;

  const getTimeValue = () => {
    if (activeButton === 'daily') {
      return dailyValue !== 0 ? `${dailyValue}Hrs` : '0 Hrs';
    } else if (activeButton === 'weekly') {
      return weeklyValue !== 0 ? `${weeklyValue}Hrs` : '0 Hrs';
    } else if (activeButton === 'monthly') {
      return monthlyValue !== 0 ? `${monthlyValue}Hrs` : '0 Hrs';
    }
    return '0 Hrs'; // Default to '0 Hrs' if activeButton is not recognized
  };

  return (
    <>
      <div className="activity-card">
        {/* coloured side of card */}
        <div className={className}>
          <img src={image} alt={activity} />
        </div>
        {/* info in the card */}
        <div className="data-card">
          <div className="card-title">
            <p className="card-title-p">{activity}</p>
            <button className="three-dot-btn">
              <img src={dots} alt="Three dots" />
            </button>
          </div>
          {/* time div */}
          <div className="card-info">
            <p className="current-time current-time-work">{getTimeValue()}</p>
          </div>
          {/* info after clicking on the three-dot button */}
        </div>
      </div>
    </>
  );
};

export default Component;
