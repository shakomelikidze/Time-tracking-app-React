import './App.css';
import userIcon from './images/image-jeremy.png'
import dots from './images/ellipsis.svg'
import work from './images/work.svg'
import play from './images/play.svg'

function App() {
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
          <button className="time-selection daily-button"><p class="button-p-daily">Daily</p></button>
          <button className="time-selection weekly-button "><p class="button-p-weekly">Weekly</p></button>
          <button className="time-selection monthly-button"><p class="button-p-monthly">Monthly</p></button>
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
            <p class="current-time current-time-work">0Hrs</p>
            <p class="whole-time whole-time-work">Yesterday - 0hrs</p>
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
            <p class="current-time current-time-play">0Hrs</p>
            <p class="whole-time whole-time-play">Yesterday - 0hrs</p>
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
