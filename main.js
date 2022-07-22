function setup(){
    canvas= createCanvas(450,450)
    canvas.position(800,180)
    video= createCapture(VIDEO)
    video.position(100,180)
    poseNet= ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Model has loaded.")
}

function gotPoses(results){
 if (results.length > 0) {
     console.log(results)
 }
}