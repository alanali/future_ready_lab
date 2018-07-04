//random color
function randomColor(){
    return [random(0,255), random(0,255), random(0,255)];
}
//Circle variables
function Circle(x, y, size, color, xSpeed, ySpeed){
    this.xCoor = x;
    this.yCoor = y;
    this.diameter = size;
    this.color = color; //default black color
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
}
//Setup
function setup() {
    createCanvas(prompt("Enter width of canvas: "),prompt("Enter height of canvas: "));
    frameRate(15);
}
//random number in set
function numberSet(set){
    var numBalls = Math.floor(Math.random() * set.length);
    return set[numBalls];
}
//generates random number from set
var balls = numberSet([2,5,9,16]);
//creates empty list
var circleList = [];
//add circles to the list accoring to number from set
for (var b = 0; b < balls; b++){
    var circle1 = new Circle(0,0,60,[0,0,0],Math.random()*20,Math.random()*20);
    circleList = circleList.concat([circle1]);
}
function draw(){
    //Paints over the other balls
    background("#fae");
    for (var i = 0; i < circleList.length; i++){
        fill(circleList[i].color);
        ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);
        if (circleList[i].xCoor > width || circleList[i].xCoor < 0){ //if touch edge
            circleList[i].color = randomColor(); //random color
            circleList[i].xSpeed = -circleList[i].xSpeed; //change direction
            circleList[i].diameter = random(20,70); //random diameter
        }
        if (circleList[i].yCoor > height || circleList[i].yCoor < 0){
            circleList[i].color = randomColor();
            circleList[i].ySpeed = -circleList[i].ySpeed;
            circleList[i].diameter = random(20,70);
        }
        circleList[i].xCoor += circleList[i].xSpeed;
        circleList[i].yCoor += circleList[i].ySpeed;
    }
}