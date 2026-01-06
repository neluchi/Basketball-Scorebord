let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

function homePlusOne() {
    homeScore +=1
    homeScoreEl.innerText = homeScore
}

function homePlusTwo() {
    homeScore +=2
    homeScoreEl.innerText = homeScore
}

function homePlusThree() {
    homeScore +=3
    homeScoreEl.innerText = homeScore
}

function guestPlusOne() {
    guestScore +=1
    guestScoreEl.innerText = guestScore
}

function guestPlusTwo() {
    guestScore +=2
    guestScoreEl.innerText = guestScore
}

function guestPlusThree() {
    guestScore +=3
    guestScoreEl.innerText = guestScore
}

function resetScore() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.innerText = homeScore
    guestScoreEl.innerText = guestScore
}