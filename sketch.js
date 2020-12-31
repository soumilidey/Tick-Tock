var hr, min, sec;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(900,600); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    stroke("white");
    strokeWeight(5);
    textSize(25)
    text(hr +" : "+min+" : "+sec ,170,380);
    


    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time 
    hr = hour();
    min = minute();
    sec = second();

    //To create ab iterative rotation
    secAngle = map(sec, 0, 60, 0, 360);
    minAngle = map(min,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    //drawing seconds hand
    push();
    rotate(secAngle); 
    stroke("red");
    strokeWeight(3);
    line(0,0,100,0);
    pop()

    //drawing mins hand
    push();
    rotate(minAngle);
    stroke("purple");
    strokeWeight(5);
    line(0,0,75,0);
    pop()



    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke("blue");
    strokeWeight(10);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke("red");
    arc(0,0,300,300,0,secAngle);
    //Minutes
    stroke("purple");
    arc(0,0,280,280,0,minAngle);
    //Hour
    stroke("blue");
    arc(0,0,260,260,0,hrAngle);



}