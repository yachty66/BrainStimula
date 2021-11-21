//list with music
var soundsLight = [
    "code/code_light/1.mp4",
    "code/code_light/2.mp4",
    "code/code_light/3.mp4",
    "code/code_light/4.mp4",
    "code/code_light/5.mp4",
    "code/code_light/6.mp4",
    "code/code_light/7.mp4",
];


//played music gets transferred here
var soundsTwoLight=[];

//creates new audio object which is retrieveable from every function
var soundLight = new Audio();

//counter for knowing if music was already played
var valueLight = 0;

//setter var for stop button
var stopLight = false;

//create a random number
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

//stops playing music with click on stop button
function onclickStopButtonLight(){
  document.getElementById("play-button-light").style.display="flex";
  document.getElementById("stop-button-light").style.display="none";
  stopLight = true;
  soundRegulationlight();
  stopLight = false;
}

//starts playing music with click on play button
function onclickPlayButtonLight(){
  document.getElementById("play-button-light").style.display="none";
  document.getElementById("stop-button-light").style.display="flex";
  valueLight += 1;
  soundRegulationlight();
}

//creates audio object depending on which state
function createAudioObjectlight(){
  if(soundsLight.length != 0){
    soundsLight.push(soundsTwoLight[0]);
    soundsTwoLight.shift();
  }
  var x = generateRandomNumber(soundsLight.length - 1);
  var soundSrcLight = soundsLight[x];
  soundsTwoLight.push(soundSrcLight);
  soundLight.src = soundSrcLight;
  valueLight += 1;
}
 
//regulates sound 
function soundRegulationlight(){
  //if no music was played start new music
  if (valueLight == 1 && stopLight == false){
    createAudioObjectlight();
    soundLight.play();
  //else play the music which was already played  
  }else if(valueLight > 1 && stopLight == false){
    soundLight.play();
  }else if(stopLight == true){
    soundLight.pause();
  }
}

//starts new music if current music is finished
soundLight.addEventListener('ended',function(){
  createAudioObjectLight();
  soundRegulationLight();
});