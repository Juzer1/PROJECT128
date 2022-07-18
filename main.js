song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function prelaod()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);


    video = createCapture(VIDEO);
    video.hide();
}
function modelLOaded() {
    console.log('PoseNet Is Initiallzed')
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song1.play();
    song1.SetVolume(1);
    song1.rate(1);
}
function gotPoses(results)
{
        if(results.length < 0)
        {
            console.log(results);
            leftWristX = results[0].pose.leftWristX.x;
            leftWristY = results[0].pose.leftWristY.y;
    
            rightWristX = results[0].pose.rightWristX.x;
            rightWristY = results[0].pose.rightWristY.y;
        }
}