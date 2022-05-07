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

function showDisplayButton(){
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'block'
}

// add event listener to roll button
rollBtn.addEventListener('click', () => {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1
    if(player1Turn) { 
        // update player1 dice
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
        
        player1Score += randomNumber1
        player1Dice.textContent = randomNumber1
        message.innerHTML = `Player One's Turn`
        player1Scoreboard.innerHTML = player1Score

    }else{
       // update player2 dice
       player1Dice.classList.remove('active')
       player2Dice.classList.add('active')

       player2Score += randomNumber1
       player2Dice.textContent = randomNumber1
       message.innerHTML = `Player Two's Turn`
       player2Scoreboard.innerHTML = player2Score
        
    }
    
    if(player1Score >= 20 ) {
        message.innerHTML = `Player One Wins!🥳`
        showDisplayButton()
        
    }else if(player2Score >= 20 ) {
        message.innerHTML = `Player Two Wins!🎉`
        showDisplayButton()
    }

    // toggle player1Turn
    player1Turn = !player1Turn 
})


