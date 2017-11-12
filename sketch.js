var sound;
var button;
var rate;
var vol;

function preload() {
  sound = loadSound("scott.mp3")
}

function setup() {
  createCanvas(360, 640);
  button = createButton("PLAY");
  button.position(10, (height-25));
  button.mousePressed(playStop);
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  text("slow", 5, height/2);
  text("fast", width-25, height/2);
  text("loud", width/2, 15);
  text("soft", width/2, height-10);
  
  rate = map(mouseX, 0, width, 0, 1);
  vol = map(mouseY, 0, height, 1, 0);
  
  stroke(255);
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY);
  
  print("vol: " + vol + "rate: " + rate);
  
  sound.setVolume(vol);
  sound.rate(rate);
}

function playStop() {

  if(!sound.isPlaying()) {
    sound.play();
    button.html("STOP");
  } else {
    sound.stop();
    button.html("PLAY");
  }
}


