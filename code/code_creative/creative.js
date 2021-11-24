//list with music
var soundsCreative = [
    "code/code_creative/1.mp4",
    "code/code_creative/2.mp4",
    "code/code_creative/3.mp4",
    "code/code_creative/4.mp4",
    "code/code_creative/5.mp4",
    "code/code_creative/6.mp4",
    "code/code_creative/7.mp4",
];


//played music gets transferred here
var soundsTwoCreative=[];

//creates new audio object which is retrieveable from every function
var soundCreative = new Audio();

//counter for knowing if music was already played
var valueCreative = 0;

//setter var for stop button
var stopCreative = false;

//create a random number
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

//stops playing music with click on stop button
function onclickStopButtonCreative(){
  document.getElementById("play-button-creative").style.display="flex";
  document.getElementById("stop-button-creative").style.display="none";
  stopCreative = true;
  soundRegulationCreative();
  stopCreative = false;
}

//starts playing music with click on play button
function onclickPlayButtonCreative(){
  document.getElementById("play-button-creative").style.display="none";
  document.getElementById("stop-button-creative").style.display="flex";
  valueCreative += 1;
  soundRegulationCreative();
}

//creates audio object depending on which state
function createAudioObjectCreative(){
  if(soundsCreative.length != 0){
    soundsCreative.push(soundsTwoCreative[0]);
    soundsTwoCreative.shift();
  }
  var x = generateRandomNumber(soundsCreative.length - 1);
  var soundSrcCreative = soundsCreative[x];
  soundsTwoCreative.push(soundSrcCreative);
  soundCreative.src = soundSrcCreative;
  valueCreative += 1;
}
 
//regulates sound 
function soundRegulationCreative(){
  //if no music was played start new music
  if (valueCreative == 1 && stopCreative == false){
    createAudioObjectCreative();
    soundCreative.play();
  //else play the music which was already played  
  }else if(valueCreative > 1 && stopCreative == false){
    soundCreative.play();
  }else if(stopCreative == true){
    soundCreative.pause();
  }
}

//starts new music if current music is finished
soundCreative.addEventListener('ended',function(){
  createAudioObjectCreative();
  soundRegulationCreative();
});