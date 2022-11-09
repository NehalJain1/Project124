function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
//---
    canvas = createCanvas(550,500);
    canvas.position(560,150);
//---
poseNet = ml5.poseNet(video, ModelLoaded);
poseNet.on("pose",gotPoses);
}
function ModelLoaded() {
    console.log("PoseNet is Initialialized.");
}
function gotPoses(results) {
    if(results.length > 0) 
    {
    console.log(results);
    }
    }

    function draw() {
        background('rgb(71, 245, 187)');
    }