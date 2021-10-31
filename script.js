var sounds = [
    "Pokemon.mp3",
    "Wonderwall.mp3",
    "Tacobell.mp3",
    "Starwars.mp3",
    "Mcdonalds.mp3",
    "KFC.mp3",
    "Salvia.mp3",
    "Allstar.mp3",
    "Funtime.mp3",
    "Clothes.mp3"
];

var sound;

//function used to create a random number
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function playSound() {
  //create a random number and assign to x
  var x = generateRandomNumber(sounds.length - 1);
  var soundSrc = sounds[x];
  //create a new instance of the audio object
  if (sound) {
      sound.pause();
  } else {
      sound = new Audio();
  }
  sound.src = soundSrc;
  //play the sound
  sound.play();
}

document.getElementById('soundbutton').addEventListener('click', playSound);