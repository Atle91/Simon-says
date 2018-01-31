
$(document).ready(() => {


  const colors = ["green", "red", "yellow", "blue"];
  const greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  const redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  const yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  const blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");



  let state = {
    on: false,
    count: 0,
    playersTurn: false,
    sequence: [],
    colorPushed: []
  }
  
  function step(){
    let random = Math.floor(Math.random()*4);
    state.count = state.count+1;
    $(".count").text(state.count);
    state.sequence = state.sequence.concat(colors[random]);
    playSequence();
    
  }
  
  function playSequence(){
    state.sequence.map((color, i) => {
      let ms = 600 * (i+1);
      if(color === "green")  setTimeout(() => playGreen(), ms);
      if(color === "red")    setTimeout(() => playRed(), ms);
      if(color === "yellow") setTimeout(() => playYellow(), ms);
      if(color ==="blue")    setTimeout(() => playBlue(), ms);
    })
    setTimeout(() => enableTurn(), 1100 * state.sequence.length);
  }
  
  function enableTurn(){
    state.playersTurn = !state.playersTurn;
    if(state.playersTurn){
      document.getElementById("grn").className += " green-hover";
      document.getElementById("red").className += " red-hover";
      document.getElementById("ylw").className += " yellow-hover";
      document.getElementById("bl").className += " blue-hover";
    }else{
      document.getElementById("grn").classList.remove("green-hover");
      document.getElementById("red").classList.remove("red-hover");
      document.getElementById("ylw").classList.remove("yellow-hover");
      document.getElementById("bl").classList.remove("blue-hover");
    }
  }

  function clearState(){
    state = {
      on: false,
      count: 0,
      sequence: [],
      colorPushed: [],
      playersTurn: false
    }
    $(".start").show();
    $(".count").text("");
  }
  
  function checkColor(color, index){
    if(color !== state.sequence[index]){
      return clearState();
    }
    if(state.colorPushed.length === state.sequence.length){
      enableTurn();
      step();
      state.colorPushed = [];
    }
  }
  $(".green").click(() => {
    colorPushed("green");
  })
  $(".red").click(() => {
    colorPushed("red");
  })
  $(".yellow").click(() => {
    colorPushed("yellow");
  })
  $(".blue").click(() => {
    colorPushed("blue");
  })

  function colorPushed(color){
    if(!state.playersTurn) return;
    if(color === "green") {
      greenSound.play()
      document.getElementById("grn").className += " clicked-grn";
      setTimeout(() => document.getElementById("grn").classList.remove("clicked-grn"), 700)
    };
    if(color === "red") {
      redSound.play()
      document.getElementById("red").className += " clicked-red";
      setTimeout(() => document.getElementById("red").classList.remove("clicked-red"), 700);
    }
    if(color === "yellow") {
      yellowSound.play()
      document.getElementById("ylw").className += " clicked-ylw";
      setTimeout(() => document.getElementById("ylw").classList.remove("clicked-ylw"), 700);
    };

    if(color === "blue") {
      blueSound.play()
      document.getElementById("bl").className += " clicked-bl";
      setTimeout(() => document.getElementById("grn").classList.remove("clicked-bl"), 700);
    };
    state.colorPushed = state.colorPushed.concat(color);
    
    checkColor(color, state.colorPushed.indexOf(color));
    
    
    
  }

  function playGreen(){
    document.getElementById("grn").style.background = "hsl(107, 77%, 69%)";
    greenSound.play();
    setTimeout(() => document.getElementById("grn").style.background = "hsl(115, 31%, 43%)", 600)
    
  }
  function playRed(){
   document.getElementById("red").style.background = "hsl(1, 80%, 63%)";
   redSound.play()
   setTimeout(() => document.getElementById("red").style.background = "hsl(1, 40%, 43%)", 600)
 }
 function playYellow(){
  document.getElementById("ylw").style.background = "hsl(62, 70%, 66%)";
  yellowSound.play()
  setTimeout(() => document.getElementById("ylw").style.background = "hsl(62, 40%, 43%)", 600)
}
function playBlue(){
 document.getElementById("bl").style.background = "hsl(229, 68%, 63%)";
 blueSound.play()
 setTimeout(() => document.getElementById("bl").style.background = "hsl(229, 40%, 43%)", 600)
}

$(".start").on("click", () => {
  state.on = !state.on;
  $(".start").hide();
  step();
  
})










let background = [
{background: "hsl(115, 80%, 43%)"},
{background: "hsl(1, 80%, 43%)"},
{background: "hsl(62, 80%, 43%)"},
{background: "hsl(229, 80%, 43%)"}
]
});

