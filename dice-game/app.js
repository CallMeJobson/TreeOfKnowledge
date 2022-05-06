// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true


// Create variables for the DOM elements
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')
const message = document.getElementById('message')



// add event listener to roll button
rollBtn.addEventListener('click', () => {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1
    if(player1Turn) {
        console.log(`player One rolled ${randomNumber1}`)
        player1Turn = false
    }else{
        console.log(`player Two rolled ${randomNumber1}`)
        player1Turn = true
    }
})


