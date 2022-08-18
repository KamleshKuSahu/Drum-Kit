var xx = document.querySelectorAll(".drum");
for (var i = 0; i < xx.length; i++) {
  xx[i].addEventListener("click", function () {
    var yy = this.innerText;
    getSound(yy);
  });
}
function getSound(i) {
  if (i === "w") return w.play();
  else if (i == "a") return a.play();
  else if (i == "s") return s.play();
  else if (i == "d") return d.play();
  else if (i == "j") return j.play();
  else if (i == "k") return k.play();
  else if (i == "l") return l.play();
}
document.addEventListener("keydown", (even) => {
  getSound(even.key);
});
var w = new Audio("sounds/tom-1.mp3");
var a = new Audio("sounds/tom-2.mp3");
var s = new Audio("sounds/tom-3.mp3");
var d = new Audio("sounds/tom-4.mp3");
var j = new Audio("sounds/snare.mp3");
var k = new Audio("sounds/crash.mp3");
var l = new Audio("sounds/kick-bass.mp3");
