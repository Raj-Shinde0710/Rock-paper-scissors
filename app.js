let userScore = 0
let compScore = 0
let drawScore = 0
const msg = document.querySelector(".msg")
const choices = document.querySelectorAll(".choice")
const uScore = document.querySelector(".userScore")
const cScore = document.querySelector(".compScore")
const dScore = document.querySelector(".draw")



const drawGame = () => {
 msg.innerText = "game draw" 
  drawScore++
 dScore.innerHTML = drawScore
}

const playGame = (userChoice) => {
  const compChoice = genCompChoice()
  console.log( "user: " , userChoice)
  console.log( "comp: " , compChoice)

  if(userChoice === compChoice){
    drawGame()
  }
  else{
    if (userChoice === "rock") {
      if (compChoice === "scissors") {
         msg.innerText = `you win the choice of computer was ${compChoice}`
         userScore++
 uScore.innerHTML = userScore
      } else {
        msg.innerText = `computer wins the choice of computer was ${compChoice}`
        compScore++
 cScore.innerHTML = compScore
      }
    } 
    else if (userChoice === "paper") {
      if (compChoice === "scissors") {
        msg.innerText = `computer wins the choice of computer was ${compChoice}`
        compScore++
 cScore.innerHTML = compScore
      } else {
        msg.innerText = `you win the choice of computer was ${compChoice}`
        userScore++
 uScore.innerHTML = userScore
      }
    } 
    else {
      if (compChoice === "rock") {
       msg.innerText = `computer wins the choice of computer was ${compChoice}`
       compScore++
 cScore.innerHTML = compScore
      } else {
       msg.innerText = `you win the choice of computer was ${compChoice}`
       userScore++
 uScore.innerHTML = userScore
      }
    } 
  }


}

const genCompChoice = () => {
  let options = ["rock" , "paper" , "scissors"]
  let randIdx = Math.floor(Math.random()*3)
  // console.log(options[randIdx])
  return options[randIdx]
}


for ( let choice of choices) {
  
    choice.addEventListener("click" , () => {
      let userChoice =  choice.getAttribute("id")
      
      playGame(userChoice)
      
    }
    )
}

