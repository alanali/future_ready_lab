//Circle Stuff
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
    background("#fae");
}
//Draw function
function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    
    console.log("The x coordinate is " + circle.xCoor);
    //Detect edges and bounce
    if (circle.xCoor >= 640){
        circle.color = [random(225), random(225), random(225)];
        circle.xSpeed = -circle.xSpeed;
        circle.xCoor += circle.xSpeed;
        circle.diameter = random(20,100);
    }else if (circle.yCoor >= 480){
        circle.color = [random(225), random(225), random(225)];
        circle.ySpeed = -circle.ySpeed;
        circle.yCoor += circle.ySpeed;
        circle.diameter = random(20,100);
    }else if (circle.yCoor < 0){
        circle.color = [random(225), random(225), random(225)];
        circle.ySpeed = -circle.ySpeed;
        circle.yCoor += circle.ySpeed;
        circle.diameter = random(20,100);
    }else if (circle.xCoor < 0){
        circle.color = [random(225), random(225), random(225)];
        circle.xSpeed = -circle.xSpeed;
        circle.xCoor += circle.xSpeed;
        circle.diameter = random(20,100);
    }
    circle.xCoor += circle.xSpeed;
    circle.yCoor += circle.ySpeed;
}