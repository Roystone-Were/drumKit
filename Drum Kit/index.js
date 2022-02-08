// detecting button press
var allButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < allButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", buttonClick);
    function buttonClick(){
        var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
      
} 

// detecting Keyboard Press
document.addEventListener("keypress", keyboardpress);
function keyboardpress(event){ //the "event" help us tap in to the event that triggered the event listener .which are the keyboard keys
    makeSound(event.key); //the "key" property tells as specific key on the keyboard that was pressed 
    buttonAnimation(event.key);
}

function makeSound(key){ //after the key is pressed matching the case in the switch , it makes the specific sound
    switch (key) {
        case "w":
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
            break;
 
         case "a":
         var kickBass = new Audio("sounds/kick-bass.mp3");
          kickBass.play();
            break;
 
         case "s":
         var snare = new Audio("sounds/snare.mp3");
          snare.play();
            break;
 
         case "d":
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
 
         case "j":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;
 
         case "k":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
 
         case "l":    
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
        break;
 
        default:console.log(buttonInnerHTML);
    }
 
}
function buttonAnimation(currentKey){
    var activebutton = document.querySelector("." + currentKey)
    activebutton.classList.add("pressed")
    setTimeout(function () {
        activebutton.classList.remove("pressed");
        
    },100);

}