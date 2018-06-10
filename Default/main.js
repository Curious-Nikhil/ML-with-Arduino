//to start server
//bots-go -d C:\Users\mishr\Documents\Learning\p5.js Bots\HelloWorld

var b = p5.board('COM8', 'Arduino/Genuino Uno');
var led;

function setup() {
  createCanvas(200, 200)
  led = b.pin(10, 'LED')
}

function draw() {
 
  LEDON();
  fill(0);
  ellipse(mouseX, mouseY, 10);
}

function LEDON() {
  if (mouseIsPressed) {
    led.on();
    print("led is on!")
  } else {
    led.off()
  } 
}