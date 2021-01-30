// adding code for playing the sound by clicking on the respective buttons
for (var i = 0 ; i < document.querySelectorAll(".drum").length ; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    makeSound(this.textContent);
    buttonAnimation(this.textContent);
  });
}

// adding code for playing the sound using keyboard keys...we will add event listener to the entire document so that we can use any key which we want.
// document.addEventListener("keydown",function(event){console.log(event)}); //passing the variable in the function helps us to know which event took place
//i.e which key was pressed. we can use any variable name in place of event as it is only the input of the function which can have any name.

document.addEventListener("keydown",function(event){
  makeSound(event.key); // event.key gives us only the key's value which was pressed and then accordingly we can play the sound...keypresses are
  // irrespective of the names of the keys given in html but depends on switch case values.
  buttonAnimation(event.key);
})

function makeSound(pressedButton){
  // var pressedButton = this.textContent;
  // document.querySelector("." + pressedButton).classList.add("change-color");

  switch (pressedButton) {
    case "w":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
      break;

    case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;

    case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      break;

    case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      break;

    case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      break;

    case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      break;

    case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      break;

    default:
        console.log(pressedButton);
  }
}

function buttonAnimation (pressedButton){
  document.querySelector("." + pressedButton).classList.add("pressed");//pressed class in javascript is for adding animation

  setTimeout(function(){
    document.querySelector("." + pressedButton).classList.remove("pressed");//pressed class in javascript is for removing the class to produce animation
  },100);
}
