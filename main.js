eye_X = 0;
eye_Y = 0;
function preload(){
    glass = loadImage("https://i.postimg.cc/vBsWFwMx/glass.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(530, 200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    pose = ml5.poseNet(video, loaded);
    pose.on("pose", gotposes);
}
function gotposes(results){
    if (results.length > 0) {
        console.log(results);
       console.log("eye X = " + results[0].pose.rightEye.x + "eye Y = " + results[0].pose.rightEye.y);
        eye_X = results[0].pose.rightEye.x + 40;
        eye_Y = results[0].pose.rightEye.y - 40;
    }
   }
   
   function loaded(){
       console.log("Model llllllllllloooooooooddddddddeeed!!!!!!!!!!!")
   }
   

function draw(){
    image(video, 0, 0, 300, 300);
    image(glass, eye_X, eye_Y, 90, 50)
}

function Snap(){
    Name = document.getElementById("Name").value;
    save(Name + ".PNG")
}
function Y(){
    window.location = "index_Y.html";
}
function B(){
    window.location = "index_B.html";
}