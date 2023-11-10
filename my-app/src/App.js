import './App.css';
import userIcon from './images/image-jeremy.png'
import play from './images/play.svg'
import work from './images/work.svg'
import study from './images/stody.svg'
import exercise from './images/exercise.svg'
import social from './images/social.svg'
import selfCare from './images/self-care.svg'
import React, {useState, useEffect} from 'react'
import Component from './Component';


function App() {
  const [dailyWorkTime, setDailyWorkTime] = useState('0');
  const [weeklyWorkTime, setWeeklyWorkTime] = useState('0');
  const [monthlyWorkTime, setMonthlyWorkTime] = useState('0');

  const [dailyPlayTime, setDailyPlayTime] = useState('0');
  const [weeklyPlayTime, setWeeklyPlayTime] = useState('0');
  const [monthlyPlayTime, setMonthlyPlayTime] = useState('0');

  const [dailyStudyTime, setDailyStudyTime] = useState('0');
  const [weeklyStudyTime, setWeeklyStudyTime] = useState('0');
  const [monthlyStudyTime, setMonthlyStudyTime] = useState('0');

  const [dailyExerciseTime, setDailyExerciseTime] = useState('0');
  const [weeklyExerciseTime, setWeeklyExerciseTime] = useState('0');
  const [monthlyExerciseTime, setMonthlyExerciseTime] = useState('0');

  const [dailySocialTime, setDailySocialTime] = useState('0');
  const [weeklySocialTime, setWeeklySocialTime] = useState('0');
  const [monthlySocialTime, setMonthlySocialTime] = useState('0');

  const [dailySelfCareTime, setDailySelfCareTime] = useState('0');
  const [weeklySelfCareTime, setWeeklySelfCareTime] = useState('0');
  const [monthlySelfCareTime, setMonthlySelfCareTime] = useState('0');

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (button) => {
    setActiveButton(button);

    if (button === 'daily') {
      setDailyWorkTime('5');
      setDailyPlayTime('1');
      setDailyStudyTime('0');
      setDailyExerciseTime('1');
      setDailySocialTime('1');
      setDailySelfCareTime('0');
    } else if (button === 'weekly') {
      setWeeklyWorkTime('32'); 
      setWeeklyPlayTime('10');
      setWeeklyStudyTime('4');
      setWeeklyExerciseTime('4');
      setWeeklySocialTime('5');
      setWeeklySelfCareTime('2');
    } else if (button == 'monthly') {
      setMonthlyWorkTime('103');
      setMonthlyPlayTime('23');
      setMonthlyStudyTime('13');
      setMonthlyExerciseTime('11');
      setMonthlySocialTime('21');
      setMonthlySelfCareTime('7');
    } else {
      setDailyWorkTime('0');
      setDailyPlayTime('0');
      setWeeklyWorkTime('0');
      setWeeklyPlayTime('0');
    }
  };

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
          <button onClick={() => 
            handleButtonClick('daily')}
            class="button-p-daily">Daily
          </button>
          <button onClick={() => {
            handleButtonClick('weekly')}} 
            class="button-p-weekly">Weekly
          </button>
          <button onClick={() => 
            handleButtonClick('monthly')}
            class="button-p-monthly">Monthly
          </button>
        </div>
      </div>

      <div className="right-box">
        <Component
          activity='Work'
          image={work}
          className='activity-card-background-orange'
          dailyValue={dailyWorkTime}
          weeklyValue={weeklyWorkTime}
          monthlyValue={monthlyWorkTime}
          activeButton={activeButton}
        />
        <Component 
          activity='Play' 
          image={play} 
          className='activity-card-background-sky-blue'
          dailyValue={dailyPlayTime}
          weeklyValue={weeklyPlayTime}
          monthlyValue={monthlyPlayTime}
          activeButton={activeButton}
        />
        <Component
          activity='Study'
          image={study}
          className='activity-card-background-pink'
          dailyValue={dailyStudyTime}
          weeklyValue={weeklyStudyTime}
          monthlyValue={monthlyStudyTime}
          activeButton={activeButton}
        />
        <Component
          activity='Exercise'
          image={exercise}
          className='activity-card-background-green'
          dailyValue={dailyExerciseTime}
          weeklyValue={weeklyExerciseTime}
          monthlyValue={monthlyExerciseTime}
          activeButton={activeButton}
        />
        <Component
          activity='Social'
          image={social}
          className='activity-card-background-violet'
          dailyValue={dailySocialTime}
          weeklyValue={weeklySocialTime}
          monthlyValue={monthlySocialTime}
          activeButton={activeButton}
        />
        <Component
          activity='Self Care'
          image={selfCare}
          className='activity-card-background-yellow'
          dailyValue={dailySelfCareTime}
          weeklyValue={weeklySelfCareTime}
          monthlyValue={monthlySelfCareTime}
          activeButton={activeButton}
        />
      </div>
    </div>
  );
}

export default App;
