// Input Boxes
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const box5 = document.getElementById("box5")
const box6 = document.getElementById("box6")
const box7 = document.getElementById("box7")
const box8 = document.getElementById("box8")
const box9 = document.getElementById("box9")
const boxArray = [    
    document.getElementById("box1"),
    document.getElementById("box2"),
   document.getElementById("box3"),
    document.getElementById("box4"),
   document.getElementById("box5"),
    document.getElementById("box6"),
   document.getElementById("box7"),
    document.getElementById("box8"),
   document.getElementById("box9"),
  ]

let emptyBoxes

// Buttons and Player Turn Text
const pTurnText = document.getElementById("pTurn")
const startButton = document.getElementById("startBtn")

// Variables
let x_Score = 0
let o_Score = 0
let option
let player1
let AlgorithmPlayer
let AlgoritmTurn = false
let turn

function startGame() {

  let option = prompt("Would you like to be X or O?")
  console.log(option)

  if(option == "X"){
      console.log("You are X")
      turn = "X"
      pTurnText.innerHTML = "X"
      player1 = "X"
      AlgorithmPlayer = "O"
  } 
  
  else if (option == "O"){
    console.log("You are O")
    turn = "O"
    pTurnText.innerHTML = "O"
    player1 = "O"
    AlgorithmPlayer = "X"
  } else{
    console.log("Invalid Input!")
  }
  startButton.hidden = true
}

function checkBoxes() {
  // Winning conditions for player X
  if (turn == "X" && player1 == "X") {
    if (box1.value == "X" && box2.value == "X" && box3.value == "X" ||
        box4.value == "X" && box5.value == "X" && box6.value == "X" ||
        box7.value == "X" && box8.value == "X" && box9.value == "X" ||
        box1.value == "X" && box5.value == "X" && box9.value == "X" ||
        box3.value == "X" && box5.value == "X" && box7.value == "X" ||
        box1.value == "X" && box4.value == "X" && box7.value == "X" ||
        box2.value == "X" && box5.value == "X" && box8.value == "X" ||
        box3.value == "X" && box6.value == "X" && box9.value == "X") 
    {
      x_Score++
      console.log("X wins! Score: " + x_Score)

      for (let i = 0; i < boxArray.length; i++) {
        boxArray.value = " ";
      }
      startButton.hidden = false
    }else {
      switchTurn()
      console.log("Switching turns")
    }
  }

  // Winning conditions for player O
  else if (turn == "O" && player1 == "O") {
    if (box1.value == "O" && box2.value == "O" && box3.value == "O" ||
        box4.value == "O" && box5.value == "O" && box6.value == "O" ||
        box7.value == "O" && box8.value == "O" && box9.value == "O" ||
        box1.value == "O" && box5.value == "O" && box9.value == "O" ||
        box3.value == "O" && box5.value == "O" && box7.value == "O" ||
        box1.value == "O" && box4.value == "O" && box7.value == "O" ||
        box2.value == "O" && box5.value == "O" && box8.value == "O" ||
        box3.value == "O" && box6.value == "O" && box9.value == "O") 
    {

      o_Score++
      console.log("O wins! Score: " + o_Score)

      for (let i = 0; i < boxArray.length; i++) {
        boxArray.value = " ";
      }

      startButton.hidden = false

    } 
    else {
      switchTurn()
    }
  }

  else if (turn == "X" && AlgorithmPlayer == "X") {
    if (box1.value == "X" && box2.value == "X" && box3.value == "X" ||
        box4.value == "X" && box5.value == "X" && box6.value == "X" ||
        box7.value == "X" && box8.value == "X" && box9.value == "X" ||
        box1.value == "X" && box5.value == "X" && box9.value == "X" ||
        box3.value == "X" && box5.value == "X" && box7.value == "X" ||
        box1.value == "X" && box4.value == "X" && box7.value == "X" ||
        box2.value == "X" && box5.value == "X" && box8.value == "X" ||
        box3.value == "X" && box6.value == "X" && box9.value == "X") 
    {
      x_Score++
      console.log("AI Wins")

      for (let i = 0; i < boxArray.length; i++) {
        boxArray[i].value = " ";
      }
      startButton.hidden = false
    }else {
      emptyBoxes = boxArray.filter(box => box.value === "");
      if (emptyBoxes.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
      emptyBoxes[randomIndex].value = "X"
    }
        switchTurn()
        console.log("Switching turns")
    }
  }

  // Winning conditions for player O
  else if (turn == "O" && AlgorithmPlayer == "O") {
    if (box1.value == "O" && box2.value == "O" && box3.value == "O" ||
        box4.value == "O" && box5.value == "O" && box6.value == "O" ||
        box7.value == "O" && box8.value == "O" && box9.value == "O" ||
        box1.value == "O" && box5.value == "O" && box9.value == "O" ||
        box3.value == "O" && box5.value == "O" && box7.value == "O" ||
        box1.value == "O" && box4.value == "O" && box7.value == "O" ||
        box2.value == "O" && box5.value == "O" && box8.value == "O" ||
        box3.value == "O" && box6.value == "O" && box9.value == "O") 
    {

      o_Score++
      console.log("O wins! Score: " + o_Score)

      for (let i = 0; i < boxArray.length; i++) {
        boxArray.value = " ";
      }

      startButton.hidden = false

    } else {
      emptyBoxes = boxArray.filter(box => box.value === "");
      if (emptyBoxes.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
      emptyBoxes[randomIndex].value = "O"
    }
        switchTurn()
        console.log("Switching turns")
    }
  }
}

function switchTurn() {
  if (turn == "X") {
    turn = "O"
    pTurnText.innerHTML = "O"
  } else if (turn == "O") {
    turn = "X"
    pTurnText.innerHTML = "X"
  } else {
    console.log("Error switching turn")
  }
}
