//to start server
//bots-go -d C:\Users\mishr\Documents\Learning\p5.js Bots\HelloWorld

var b = p5.board('COM8', 'Arduino/Genuino Uno');
var led;
var val;

var p = b.pin(0, 'ANALOG', 'INPUT');
p.read(function (val) {print(val);});

function setup() {
  background(255)
  createCanvas(200, 200)
  led = b.pin(10, 'LED')
}

function draw() {
  if (val < 10) {
    //background(0)
    print("ZEROOO")
  } else {
    //background(255)    
  }
  //print(val)
  LEDON();
  
}
function Prival(val) {
  print(val);
}


function LEDON() {
  if (mouseIsPressed) {
    led.on();
    fill(0);
    ellipse(mouseX, mouseY, 10);
    print("led is on!")
  } else {
    led.off()
  } 
}