var img;
var initials ='ge'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
  img1 = loadImage('cauldron.png')
  img2 = loadImage('child.png')
  img3 = loadImage('guts.png')
  img4 = loadImage('rabbit.png')
  img5 = loadImage('eyeball.png')
  img6 = loadImage('unicornhorn.png')
  img7 = loadImage('fairywings.png')
  img8 = loadImage('tooth.png')
  img9 = loadImage('crab.png')
  img10 = loadImage('bubble.png')
}

function setup() {
createCanvas(600, 400);
background(screenbg);
image(img1, 0, 0);

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed

 if (toolChoice == '1' ) {//Blood
    stroke(179, 32, 21);
    strokeWeight(6);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') {//child
    image(img2, mouseX-15, mouseY-15, 30, 30);
    
  } else if (toolChoice == '3') {//guts
    image(img3, mouseX-15, mouseY-15, 30, 30);
    
  } else if (toolChoice == '4') {//rabbit
    image(img4, mouseX-15, mouseY-15, 30, 30);
    
  } else if (toolChoice == '5') {//eyeball
    image(img5, mouseX-15, mouseY-15, 30, 30);
    
  } else if (toolChoice == '6') {//horn
    image(img6, mouseX-15, mouseY-15, 30, 30);
    
  } else if (toolChoice == '7') {//faery wings
    image(img7, mouseX-15, mouseY-15, 30, 30);
    
  } else if (toolChoice == '8') {//tooth
    image(img8, mouseX-15, mouseY-15, 30, 30);
    
  } else if (toolChoice == '9') {//crab
    image(img9, mouseX-15, mouseY-15, 30, 30);
    
  } else if (toolChoice == '0') {//bubbles
    image(img10, mouseX-15, mouseY-15, 30, 30);
  }
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
    image(img, 0, 0);
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second 
}
