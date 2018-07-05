function setup() {
    canvas = createCanvas(prompt("Enter width of canvas: "),prompt("Enter height of canvas: "));
    frameRate(15);
    makeCircles();
}
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
var circleList = [];

//random number in set
function makeCircles(){
    //generates random number from set
    var balls = random([2,5,9,16]);
    //add circles to the list accoring to number from set
    for (var b = 0; b < balls; b++){ //generates random position
        circleList.push(new Circle(random(width),random(height),50, [0,0,0],random(10,30),random(10,30)));
    }
}

function draw(){
    //Paints over the other balls
    background("#fae");
    for (var i = 0; i < circleList.length; i++){
        fill(circleList[i].color);
        ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);
        //looping through postitions of other circles to test for collosion
        
        for(var x = 0; x < circleList.length; x++){
            var dx = circleList[i].xCoor - circleList[x].xCoor;
            var dy = circleList[i].yCoor - circleList[x].yCoor;
            var distance = Math.sqrt(dx * dx + dy * dy); //pythangorean theorem to solve for distance between circles
            if (distance < (circleList[i].diameter + circleList[x].diameter)/2){
                if (circleList[i].xCoor < circleList[x].xCoor || circleList[i].xCoor > circleList[x].xCoor){ //accounting for the radius of circles
                    circleList[i].ySpeed = -circleList[i].ySpeed;
                }if (circleList[i].yCoor < circleList[x].yCoor || circleList[i].yCoor > circleList[x].yCoor){
                    circleList[i].xSpeed = -circleList[i].xSpeed;
                }
            }
        }
        
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