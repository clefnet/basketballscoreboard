let homeScore = document.getElementById("insert_home")
let awayScore = document.getElementById("insert_away")
let homeCount = 0
let awayCount = 0
let newMin = 30
let sec = 00
let countSec = 59

function timeCount(){
    //let date = new Date()
    //let min = date.getMinutes()
    //let sec = date.getSeconds()
    //let time = date.getTime()

    let getTime = document.getElementById('time')
    if(sec === 0){
        countSec = countSec - 1
    }
    if(countSec==00){
        countSec = 59
        newMin = newMin - 1
    }
    getTime.textContent = newMin+':'+countSec
    let timeOut = setTimeout(function(){timeCount()},1000)
}
timeCount();

function reset() {
    homeCount = 0
    awayCount = 0
    homeScore.textContent = homeCount
    awayScore.textContent = awayCount
}

function addOne_home(){
    homeCount += 1
    homeScore.textContent = homeCount
}

function addTwo_home(){
    homeCount += 2
    homeScore.textContent = homeCount
}

function addThree_home(){
    homeCount += 3
    homeScore.textContent = homeCount
}

function addOne_away(){
    homeCount += 1
    awayScore.textContent = homeCount
}

function addOne_away(){
    awayCount += 1
    awayScore.textContent = awayCount
}

function addTwo_away(){
    awayCount += 2
    awayScore.textContent = awayCount
}

function addThree_away(){
    awayCount += 3
    awayScore.textContent = awayCount
}











