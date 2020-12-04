//Store all btn classes in an array for later referrence 
const btnArr = document.getElementsByClassName('btn');

//Detect Mouse Click and Button Press

for (let i = 0; i < btnArr.length; i++) {
  document.getElementsByClassName("btn")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;

    keyPresses(buttonInnerHTML);

  })

}

//Detect keys on press
document.addEventListener("keydown", function(e) {
  //passes the returned keypress event into the keyPresses function
  console.log(e);
  keyPresses(e.key);
})

function keyPresses(key) {

  switch(key) {
    case "a":
    case "A":
      const aAudio = new Audio("audio/pitch0.mp3");
      aAudio.pause();
      aAudio.currentTime = 0;
      aAudio.volume = .5;
      aAudio.play();
      break;
    case "s":
    case "S":
      const sAudio = new Audio("audio/pitch1.mp3");
      sAudio.pause();
      sAudio.currentTime = 0;
      sAudio.volume = .5;
      sAudio.play();
      break;  
    case "d":
    case "D":
      const dAudio = new Audio("audio/pitch2.mp3");
      dAudio.pause();
      dAudio.currentTime = 0;
      dAudio.volume = .5;
      dAudio.play();
      break;  
    case "j":
    case "J":
      const jAudio = new Audio("audio/pitch3.mp3");
      jAudio.pause();
      jAudio.currentTime = 0;
      jAudio.volume = .5;
      jAudio.play();
      break;  
    case "k":
    case "K":
      const kAudio = new Audio("audio/pitch4.mp3");
      kAudio.pause();
      kAudio.currentTime = 0;
      kAudio.volume = .5;
      kAudio.play();
      break;  
    case "l":
    case "L":
      const lAudio = new Audio("audio/pitch5.mp3");
      lAudio.pause();
      lAudio.currentTime = 0;
      lAudio.volume = .5;
      lAudio.play();
      break;                   
  }

}