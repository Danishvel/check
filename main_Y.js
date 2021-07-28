eye_X = 0;
eye_Y = 0;
function preload(){
mustache = loadImage("https://i.postimg.cc/8C23Q9J2/mustache.png");
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
       console.log("eye X = " + results[0].pose.nose.x + "Nose Y = " + results[0].pose.nose.y);
       eye_X = results[0].pose.nose.x + 10;
       eye_Y = results[0].pose.nose.y + 10;
    }
   }
   
   function loaded(){
       console.log("Model llllllllllloooooooooddddddddeeed!!!!!!!!!!!")
   }
   

function draw(){
    image(video, 0, 0, 300, 300);
}

function Snap(){
    Name = document.getElementById("Name").value;
    save(Name + ".PNG")
}
function B(){
    window.location = "index_B.html";
}
function Bl(){
    window.location = "index.html";
}