const dailyBtn = document.querySelector('.daily-button')
const weeklyBtn = document.querySelector('.weekly-button')
const monthlyBtn = document.querySelector('.monthly-button')
const currentTimeWork = document.querySelector('.current-time-work')
const wholeTimeWork = document.querySelector('.whole-time-work')
const currentTimePlay = document.querySelector('.current-time-play')
const wholeTimePlay = document.querySelector('.whole-time-play')
const currentTimeStudy = document.querySelector('.current-time-study')
const wholeTimeStudy = document.querySelector('.whole-time-study')
const currentTimeExercise = document.querySelector('.current-time-exercise')
const wholeTimeExercise = document.querySelector('.whole-time-exercise')
const currentTimeSocial = document.querySelector('.current-time-social')
const wholeTimeSocial = document.querySelector('.whole-time-social')
const currentTimeSelfCare = document.querySelector('.current-time-self-care')
const wholeTimeSelfCare = document.querySelector('.whole-time-self-care')

dailyBtn.addEventListener('click', displayDaily)
weeklyBtn.addEventListener('click', displayweekly)
monthlyBtn.addEventListener('click', displaymonthly)


function displayDaily() {
    const btnHover = document.querySelector('.button-p-daily') 
    btnHover.classList.toggle('active')
    currentTimeWork.innerHTML = "5Hrs"
    wholeTimeWork.innerHTML = "Yesterday - 7hrs"
    currentTimePlay.innerHTML = "1Hrs"
    wholeTimePlay.innerHTML = "Yesterday - 2hrs"
    currentTimeStudy.innerHTML = "0Hrs"
    wholeTimeStudy.innerHTML = "Yesterday - 1hrs"
    currentTimeExercise.innerHTML = "1Hrs"
    wholeTimeExercise.innerHTML = "Yesterday - 1hrs"
    currentTimeSocial.innerHTML = "1Hrs"
    wholeTimeSocial.innerHTML = "Yesterday - 3hrs"
    currentTimeSelfCare.innerHTML = "0Hrs"
    wholeTimeSelfCare.innerHTML = "Yesterday - 1hrs"
}

function displayweekly() {
    const btnHover = document.querySelector('.button-p-weekly')
    btnHover.classList.toggle('active')
    currentTimeWork.innerHTML = "32Hrs"
    wholeTimeWork.innerHTML = "Yesterday - 36hrs"
    currentTimePlay.innerHTML = "10Hrs"
    wholeTimePlay.innerHTML = "Yesterday - 8hrs"
    currentTimeStudy.innerHTML = "4Hrs"
    wholeTimeStudy.innerHTML = "Yesterday - 7hrs"
    currentTimeExercise.innerHTML = "4Hrs"
    wholeTimeExercise.innerHTML = "Yesterday - 5hrs"
    currentTimeSocial.innerHTML = "5Hrs"
    wholeTimeSocial.innerHTML = "Yesterday - 10hrs"
    currentTimeSelfCare.innerHTML = "2Hrs"
    wholeTimeSelfCare.innerHTML = "Yesterday - 2hrs"
}

function displaymonthly() {
    const btnHover = document.querySelector('.button-p-monthly')
    btnHover.classList.toggle('active')
    currentTimeWork.innerHTML = "103Hrs"
    wholeTimeWork.innerHTML = "Yesterday - 128hrs"
    currentTimePlay.innerHTML = "23Hrs"
    wholeTimePlay.innerHTML = "Yesterday - 29hrs"
    currentTimeStudy.innerHTML = "13Hrs"
    wholeTimeStudy.innerHTML = "Yesterday - 19hrs"
    currentTimeExercise.innerHTML = "11Hrs"
    wholeTimeExercise.innerHTML = "Yesterday - 18hrs"
    currentTimeSocial.innerHTML = "21Hrs"
    wholeTimeSocial.innerHTML = "Yesterday - 23hrs"
    currentTimeSelfCare.innerHTML = "7Hrs"
    wholeTimeSelfCare.innerHTML = "Yesterday - 11hrs"
}



const dotBtn = document.querySelectorAll('.three-dot-btn')
const texts = document.querySelectorAll('.after-click-div')


const number = 1;
while ( number < 10) {
    console.log(number)
    number = number + 2;
}

console.log(number)

   
    































// const selectTime = document.querySelectorAll('.time-selection')

// selectTime.forEach(element => {
//     element.addEventListener('click', changeButtonPColor)

//     function changeButtonPColor() {
//     const changeColor = document.querySelectorAll('.button-p')
//     changeColor.forEach(element => {
//         element.classList.toggle('active')
//     })
// }
    
// })
