//list with music
var sounds = [
    "/music/light/1.mp4",
    "/music/light/2.mp4",
    "/music/light/3.mp4",
    "/music/light/4.mp4",
    "/music/light/5.mp4",
    "/music/light/6.mp4",
    "/music/light/7.mp4",
];

//played music gets transferred here
var soundsTwo=[];

//creates new audio object which is retrieveable from every function
var sound = new Audio();

//counter for knowing if music was already played
var value = 0;

//setter var for stop button
var stop = false;

//create a random number
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

//stops playing music with click on stop button
function onclickStopButtonLight(){
  document.getElementById("play-button-light").style.display="flex";
  document.getElementById("stop-button-light").style.display="none";
  stop = true;
  soundRegulation();
  stop = false;
}

//starts playing music with click on play button
function onclickPlayButtonLight(){
  document.getElementById("play-button-light").style.display="none";
  document.getElementById("stop-button-light").style.display="flex";
  value += 1;
  soundRegulation();
}

//creates audio object depending on which state
function createAudioObject(){
  if(sounds.length != 0){
    sounds.push(soundsTwo[0]);
    soundsTwo.shift();
  }
  var x = generateRandomNumber(sounds.length - 1);
  var soundSrc = sounds[x];
  soundsTwo.push(soundSrc);
  sound.src = soundSrc;
  value += 1;
}
 
//regulates sound 
function soundRegulation(){
  //if no music was played start new music
  if (value == 1 && stop == false){
    createAudioObject();
    sound.play();
  //else play the music which was already played  
  }else if(value > 1 && stop == false){
    sound.play();
  }else if(stop == true){
    sound.pause();
  }
}

//starts new music if current music is finished
sound.addEventListener('ended',function(){
  createAudioObject();
  soundRegulation();
});