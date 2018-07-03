//Circle variables
var circle = {
    diameter: 80,
    xCoor: 0,
    yCoor: 0,
    color: [225,0,225],
    xSpeed: 5,
    ySpeed: 5
}

//Setup
function setup() {
  createCanvas(640, 480);
    background("#fae"); //pink
}
//Draw function
function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
function randomColor(){
    return [random(0,255), random(0,255), random(0,255)];
}
    //Detect edges and bounce, change direction
    if (circle.xCoor >= 640){
        circle.color = randomColor(); //random color
        circle.xSpeed = -circle.xSpeed;
        circle.xCoor += circle.xSpeed;
        circle.diameter = random(20,100); //random diameter
    }else if (circle.yCoor >= 480){
        circle.color = randomColor();
        circle.ySpeed = -circle.ySpeed;
        circle.yCoor += circle.ySpeed;
        circle.diameter = random(20,100);
    }else if (circle.yCoor < 0){ //detect edge
        circle.color = randomColor();
        circle.ySpeed = -circle.ySpeed;
        circle.yCoor += circle.ySpeed;
        circle.diameter = random(20,100);
    }else if (circle.xCoor < 0){
        circle.color = randomColor();
        circle.xSpeed = -circle.xSpeed;
        circle.xCoor += circle.xSpeed;
        circle.diameter = random(20,100);
    }
    circle.xCoor += circle.xSpeed;
    circle.yCoor += circle.ySpeed;
}