/*-------------------------------- Constants --------------------------------*/

 const choice = ['rock' , 'paper' , 'scissors']






/*-------------------------------- Variables --------------------------------*/

let msg
let playerChoice
let computerChoice






/*------------------------ Cached Element References ------------------------*/

 const rockBtnEl = document.querySelector('#rock')
const paperBtnEl = document.querySelector('#paper')
const scissoreBtnEl = document.querySelector('#scissors')
const resultDisplayBtnEl = document.querySelector('#result-display')
const resetBtnEl = document.querySelector('#resetButton')






/*-------------------------------- Functions --------------------------------*/

 function getComputerChoice() {
    // generate a random number 0 to 2
     const randomIndex = Math.floor(Math.random() * choice.length)
     console.log('randomIndex', randomIndex)

    // select the itme from the array

    return choice [randomIndex]
 }


    //   initialize game state
 function play(event) {
     computerChoice = getComputerChoice()
     playerChoice = event.target.id
    
        //    after updating state, render to html

    render()
    compare()

 }                       //       0        1           2
                        //   = ['rock' , 'paper' , 'scissors']
 
    //    updates our UI/html directly
 function render(){
    resultDisplayBtnEl.textContent = `Computer chose ${computerChoice} and you chose ${playerChoice} .${msg}`

 }

 function compare() {
  if (playerChoice === computerChoice) {
        msg = 'You tied!'
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        msg = 'You win!'
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        msg = 'You lose!'
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        msg = 'You win!'
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        msg = 'You lose!'
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        msg = 'You win!'
    } else {
        msg = 'You lose!'
    }
}

 function resetGame () {
    resultDisplayBtnEl.textContent = ''
    playerChoice = null
    computerChoice = null
 }

/*----------------------------- Event Listeners -----------------------------*/

 rockBtnEl.addEventListener('click', play )
 paperBtnEl.addEventListener('click', play)
 scissoreBtnEl.addEventListener('click', play)
 resetBtnEl.addEventListener('click',resetGame)
 