//list with music
var soundsDeep = [
    "code/code_deep/1.mp4",
    "code/code_deep/2.mp4",
    "code/code_deep/3.mp4",
    "code/code_deep/4.mp4",
    "code/code_deep/5.mp4",
    "code/code_deep/6.mp4",
    "code/code_deep/7.mp4",
];

//played music gets transferred here
var soundsTwoDeep=[];

//creates new audio object which is retrieveable from every function
var soundDeep = new Audio();

//counter for knowing if music was already played
var valueDeep = 0;

//setter var for stop button
var stopDeep = false;

//create a random number
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

//stops playing music with click on stop button
function onclickStopButtonDeep(){
  document.getElementById("play-button").style.display="flex";
  document.getElementById("stop-button").style.display="none";
  stopDeep = true;
  soundRegulationDeep();
  stopDeep = false;
}

//starts playing music with click on play button
function onclickPlayButtonDeep(){
  document.getElementById("play-button").style.display="none";
  document.getElementById("stop-button").style.display="flex";
  valueDeep += 1;
  soundRegulationDeep();
}

//creates audio object depending on which state
function createAudioObjectDeep(){
  if(soundsDeep.length != 0){
    soundsDeep.push(soundsTwoDeep[0]);
    soundsTwoDeep.shift();
  }
  var x = generateRandomNumber(soundsDeep.length - 1);
  var soundSrcDeep = soundsDeep[x];
  soundsTwoDeep.push(soundSrcDeep);
  soundDeep.src = soundSrcDeep;
  valueDeep += 1;
}
 
//regulates sound 
function soundRegulationDeep(){
  //if no music was played start new music
  if (valueDeep == 1 && stopDeep == false){
    createAudioObjectDeep();
    soundDeep.play();
  //else play the music which was already played  
  }else if(valueDeep > 1 && stopDeep == false){
    soundDeep.play();
  }else if(stopDeep == true){
    soundDeep.pause();
  }
}

//starts new music if current music is finished
sound.addEventListener('ended',function(){
  createAudioObjectDeep();
  soundRegulationDeep();
});