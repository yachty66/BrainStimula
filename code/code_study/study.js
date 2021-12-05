//list with music
var soundsStudy = [
    "code/code_study/1.mp4",
    "code/code_study/2.mp4",
    "code/code_study/3.mp4",
    "code/code_study/4.mp4",
    "code/code_study/5.mp4",
];

//played music gets transferred here
var soundsTwoStudy=[];

//creates new audio object which is retrieveable from every function
var soundStudy = new Audio();

//counter for knowing if music was already played
var valueStudy = 0;

//setter var for stop button
var stopStudy = false;

//create a random number
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

//stops playing music with click on stop button
function onclickStopButtonStudy(){
  document.getElementById("play-button").style.display="flex";
  document.getElementById("stop-button").style.display="none";
  stopStudy = true;
  soundRegulationStudy();
  stopStudy = false;
}

//starts playing music with click on play button
function onclickPlayButtonStudy(){
  document.getElementById("play-button-study").style.display="none";
  document.getElementById("stop-button-study").style.display="flex";
  valueStudy += 1;
  soundRegulationStudy();
}

//creates audio object depending on which state
function createAudioObjectStudy(){
  if(soundsStudy.length != 0){
    soundsStudy.push(soundsTwoStudy[0]);
    soundsTwoStudy.shift();
  }
  var x = generateRandomNumber(soundsStudy.length - 1);
  var soundSrcStudy = soundsStudy[x];
  soundsTwoStudy.push(soundSrcStudy);
  soundStudy.src = soundSrcStudy;
  valueStudy += 1;
}
 
//regulates sound 
function soundRegulationStudy(){
  //if no music was played start new music
  if (valueStudy == 1 && stopStudy == false){
    createAudioObjectStudy();
    soundStudy.play();
  //else play the music which was already played  
  }else if(valueStudy > 1 && stopStudy == false){
    soundStudy.play();
  }else if(stopStudy == true){
    soundStudy.pause();
  }
}

//starts new music if current music is finished
soundStudy.addEventListener('ended',function(){
  createAudioObjectStudy();
  soundRegulationStudy();
});