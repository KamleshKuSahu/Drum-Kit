var x = document.querySelectorAll(".drum");
for (var i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function () {
    var x = this.innerText;
    var aud = new Audio(getSound(x));
    aud.play();
  });
}
function getSound(i) {
  if (i === "w") return "sounds/tom-1.mp3";
  else if (i == "a") return "sounds/tom-2.mp3";
  else if (i == "s") return "sounds/tom-3.mp3";
  else if (i == "d") return "sounds/tom-4.mp3";
  else if (i == "j") return "sounds/snare.mp3";
  else if (i == "k") return "sounds/crash.mp3";
  else if (i == "l") return "sounds/kick-bass.mp3";
}
document.addEventListener("keydown", (even) => {
  var aud = new Audio(getSound(even.key));
  aud.play();
});
