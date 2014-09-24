
background(0, 0, 0);
var type = 2; // Change this to 2 if you don't want the first part
var x = 350;
var xSpeed = +5;



if(type !== 1){
    x = 50;
}
var txt = "Installing Virus...";
if(type !== 1){
    noStroke();
    for(var i = 50; i < 350; i += 5){
        fill(i, 255, 255);
        ellipse(i, 200, 1, 53);
    }
}
noStroke();
var draw = function() {
    fill(x, 255, 255);
    ellipse(x, 200, 1, 53);
    x -= xSpeed;
    if(x < 51){
        xSpeed = -1;
    }
    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    rect(200, 300, 200, 50);
    fill(255, 255, 255);
    textFont(createFont("Gill Sans", 30));
    text(txt, 200, 300);
    if(x > 350){
        xSpeed = 0;
        txt = "Done";
    }
};
