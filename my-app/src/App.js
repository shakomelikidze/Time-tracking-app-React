import './App.css';
import userIcon from './images/image-jeremy.png'
import dots from './images/ellipsis.svg'
import work from './images/work.svg'
import play from './images/play.svg'
import React, {useState} from 'react'


function App() {

  const [DailyWorkText, setDailyWork] = useState('0hrs');
  const [WeeklyWorkText, setWeeklyWork] = useState('0hrs');
  const [MonthlyWorkText, setMonthlyWork] = useState('0hrs');


  const [DailyWorkYesterady, setYesterdayWork] = useState('0hrs')
  const [DailyPlayText, setPlay] = useState('0hrs');
  const [DailyPlayYesterday, setYesterdayPlay] = useState('0hrs')

  // Toggle daily button
  const toggleDailyText = () => {
    // Today results
    setDailyWork(DailyWorkText === '0hrs' ? '5hrs' : '0hrs');

    // Yesterday results
    setYesterdayWork(DailyWorkYesterady === '0hrs' ? '7hrs' : '0hrs')
    setPlay(DailyPlayText === '0hrs' ? '10hrs' : '0hrs')
    setYesterdayPlay(DailyPlayYesterday === '0hrs' ? '2hrs' : '0hrs')
  };

  // Toggle weekly button
  const toggleWeeklyText = () => {
    // Today results
    setWeeklyWork(WeeklyWorkText === '0hrs' ? '32hrs' : '0hrs')

    // Yesterday results

  };

  // Toggle monthly button
  const toggleMonthlyText = () => {
    // Today results
    setMonthlyWork(MonthlyWorkText === '0hrs' ? '103hrs' : '0hrs');

    // Yesterday results

  };

  return (
    
    <div className="wrapper">
    {/* left box */}
    <div className="left-box">
      <div className="profile-card">
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
          <button onClick={toggleDailyText} className="time-selection daily-button">
            <button class="button-p-daily">Daily</button>
          </button>
          <button onClick={toggleWeeklyText} className="time-selection weekly-button ">
            <button class="button-p-weekly">Weekly</button>
          </button>
          <button onClick={toggleMonthlyText} className="time-selection monthly-button">
            <button class="button-p-monthly">Monthly</button>
          </button>
        </div>
      </div>
    </div>

    {/* right box */}
    <div className="right-box">

      {/* 1 card */}

      <div className="activity-card">
        {/* coloured side of card */}
        <div className="activity-card-background-orange">
          <img src={work}></img>
        </div>
        {/* info in the card */}
        <div className="data-card">
          <div class="card-title">
            <p class="card-title-p">Work</p>
            <button class="three-dot-btn">
              <img src={dots}></img>
            </button>
          </div>
          {/* time div */}
          <div class="card-info">
            <p class="current-time current-time-work">{DailyWorkText}</p>
            <p class="whole-time whole-time-work">Yesterday - {DailyWorkYesterady}</p>
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

      {/* 2 card */}

      <div class="activity-card">
        {/* coloured side of card */}
        <div class="activity-card-background-sky-blue">
          <img src={play}></img>
        </div>
        {/* info in the card */}
        <div class="data-card">
          <div class="card-title">
            <p class="card-title-p">Play</p>
            <button class="three-dot-btn">
              <img src={dots}></img>
            </button>
          </div>
          {/* time div */}
          <div class="card-info">
            <p class="current-time current-time-play">{DailyPlayText}</p>
            <p class="whole-time whole-time-play">Yesterday - {DailyPlayYesterday}</p>
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
{/* 
      <!-- 3 card -->

      <div class="activity-card">
        <!-- coloured side of card -->
        <div class="activity-card-background-pink">
          <img src="https://cdn.glitch.global/f626f544-3893-4a6a-86d4-96cc6aac28e2/icon-study.svg?v=1680090053554" alt="">
        </div>
        <!-- info in the card -->
        <div class="data-card">
          <div class="card-title">
            <p class="card-title-p">Study</p>
            <button class="three-dot-btn"><img class="three-dots" src="https://cdn.glitch.global/f626f544-3893-4a6a-86d4-96cc6aac28e2/icon-ellipsis.svg?v=1680090035213" alt=""></button>
          </div>
          <!-- time div -->
          <div class="card-info">
            <p class="current-time current-time-study">0Hrs</p>
            <p class="whole-time whole-time-study">Yesterday - 0hrs</p>
          </div>
          <!-- info after click on three dot button -->
          <div class="after-click-div">
            <ul class="theme-card-list">
              <li>Rename</li>
              <li>Save as PDF</li>
              <li>Delete</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 4 card -->

      <div class="activity-card">
        <!-- coloured side of card -->
        <div class="activity-card-background-green">
          <img src="https://cdn.glitch.global/f626f544-3893-4a6a-86d4-96cc6aac28e2/icon-exercise.svg?v=1680090038235" alt="">
        </div>
        <!-- info in the card -->
        <div class="data-card">
          <div class="card-title">
            <p class="card-title-p">Exercise</p>
            <button class="three-dot-btn"><img class="three-dots" src="https://cdn.glitch.global/f626f544-3893-4a6a-86d4-96cc6aac28e2/icon-ellipsis.svg?v=1680090035213" alt=""></button>
          </div>
          <!-- time div -->
          <div class="card-info">
            <p class="current-time current-time-exercise">0Hrs</p>
            <p class="whole-time whole-time-exercise">Yesterday - 0hrs</p>
          </div>
          <!-- info after click on three dot button -->
          <div class="after-click-div">
            <ul class="theme-card-list">
              <li>Rename</li>
              <li>Save as PDF</li>
              <li>Delete</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 5 card -->

      <div class="activity-card">
        <!-- coloured side of card -->
        <div class="activity-card-background-violet">
          <img src="https://cdn.glitch.global/f626f544-3893-4a6a-86d4-96cc6aac28e2/icon-social.svg?v=1680090050845" alt="">
        </div>
        <!-- info in the card -->
        <div class="data-card">
          <div class="card-title">
            <p class="card-title-p">social</p>
            <button class="three-dot-btn"><img class="three-dots" src="https://cdn.glitch.global/f626f544-3893-4a6a-86d4-96cc6aac28e2/icon-ellipsis.svg?v=1680090035213" alt=""></button>
          </div>
          <!-- time div -->
          <div class="card-info">
            <p class="current-time current-time-social">0Hrs</p>
            <p class="whole-time whole-time-social">Yesterday - 0hrs</p>
          </div>
          <!-- info after click on three dot button -->
          <div class="after-click-div">
            <ul class="theme-card-list">
              <li>Rename</li>
              <li>Save as PDF</li>
              <li>Delete</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 6 card -->

      <div class="activity-card">
        <!-- coloured side of card -->
        <div class="activity-card-background-yellow">
          <img src="https://cdn.glitch.global/f626f544-3893-4a6a-86d4-96cc6aac28e2/icon-self-care.svg?v=1680090047031" alt="">
        </div>
        <!-- info in the card -->
        <div class="data-card">
          <div class="card-title">
            <p class="card-title-p">Self Care</p>
            <button class="three-dot-btn"><img class="three-dots" src="https://cdn.glitch.global/f626f544-3893-4a6a-86d4-96cc6aac28e2/icon-ellipsis.svg?v=1680090035213" alt=""></button>
          </div>
          <!-- time div -->
          <div class="card-info">
            <p class="current-time current-time-self-care">0Hrs</p>
            <p class="whole-time whole-time-self-care">Yesterday - 0hrs</p>
          </div>
          <!-- info after click on three dot button -->
          <div class="after-click-div">
            <ul class="theme-card-list">
              <li>Rename</li>
              <li>Save as PDF</li>
              <li>Delete</li>
            </ul>
          </div>
        </div>
      </div> */}

      

    </div>
  </div>
    
  );
}

export default App;
