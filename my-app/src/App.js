import './App.css';
import userIcon from './images/image-jeremy.png'
import play from './images/play.svg'
import work from './images/work.svg'
import React, {useState, useEffect} from 'react'
import Component from './Component';


function App() {
  const [dailySpentTime, setDailySpentTime] = useState('0');
  const [dailyYesterday, setDailyYesterday] = useState('0')
  const [weeklySpentTime, setWeeklySpentTime] = useState(null);
  // const Component = (props) => {
  //   const [dailySpentTime, setDailySpentTime] = useState(props.initialDailyValue);
  
  //   useEffect(() => {
  //     if (props.dailyButtonClick) {
  //       setDailySpentTime('');
  //     }
  //   }, [props.dailyButtonClick]);}
  return (
    
    <div className="wrapper">
      <div className="left-box">
        {/* user's img and name */}
        <div className="user-report">
          <img className="user-img" src={userIcon}></img>
          <div className="user-info">
            <p className="report-p">Report for</p>
            <p className="user-name">Jeremy Robson</p>
          </div>
        </div>
        {/* div for time selection */}
        <div className="time-selection-div">
          <button onClick={() => {
            setDailySpentTime('5'); 
            setDailyYesterday('7')}} 
            class="button-p-daily">Daily
          </button>
          <button onClick={() => {setWeeklySpentTime('32')}} class="button-p-weekly">Weekly</button>
          <button class="button-p-monthly">Monthly</button>
        </div>
      </div>

      <div className="right-box">
        <Component 
          activity='Work' 
          image={work} 
          className='activity-card-background-orange'
          dailyValue={dailySpentTime}
          initialDailyValue='5'
          dailyYesterday={dailyYesterday}
          weeklyValue={weeklySpentTime}
        />
        <Component 
          activity='Play' 
          image={play} 
          className='activity-card-background-sky-blue'
          dailyValue={dailySpentTime}
          initialDailyValue='10'
        />
      </div>
    </div>
  );
}

export default App;
