var sound;
var button;
var rate;
var vol;

function preload() {
  sound = loadSound("scott.mp3")
}

function setup() {
  createCanvas(900, 1336);
}

function draw() {
 // background(0);
  noStroke();
  fill(255);
  text("slow", 5, height/2);
  text("fast", width-25, height/2);
  text("loud", width/2, 15);
  text("soft", width/2, height-10);
  
  rate = map(mouseX, 0, width, 0.01, 2);
  vol = map(mouseY, 0, height, 1, 0);
  
   if(touchStarted()) {
    sound.play();
  } else {
    sound.stop();
  }
  
  stroke(255);
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY);
  
  print("vol: " + vol + "rate: " + rate);
  
  sound.setVolume(vol);
  sound.rate(rate);
  
  
}



