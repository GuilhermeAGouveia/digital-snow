var toqueinit = 0;
var vet = [];
var container = document.getElementById("elementsContainer")
document.addEventListener("mousemove", e => {
  var elements = document.getElementsByClassName("neve")
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.left = (vet[i] + e.clientX - window.outerWidth / 2) + "px";
  }
})
document.addEventListener("touchstart", e => {
  toqueinit = e.targetTouches[0].pageX;
})
document.addEventListener("touchmove", e => {
  var value = -1 * (toqueinit - e.targetTouches[0].pageX);
  var elements = document.getElementsByClassName("neve")
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.left = (vet[i] + value) + "px";
  }

})

for (let i = 0; i < 50; i++) {

  var node = document.createElement("span");
  node.setAttribute("class", "neve");
  var x = Math.floor(Math.random() * 4 * window.outerWidth - window.outerWidth);
  vet.push(x);
  node.setAttribute("style", "left:" + x + "px; top: -8px;");
  container.appendChild(node);
  document.getElementsByClassName("neve")[i]
    .animate(
      [
        { left: x + "px" },
        { top: "100%" }
      ],
      {
        duration: 5000,
        iterations: Infinity,
        delay: Math.floor(Math.random() * 100 * i)
      })

}

for (let i = 0; i < 20; i++) {

  var node = document.createElement("img");
  node.setAttribute("class", "flock");
  node.setAttribute("src", "./flock.svg");
  var x = Math.floor(Math.random() * 2600);

  node.setAttribute("style", "left:" + x + "px; top: -27px;");
  container.appendChild(node);
  document.getElementsByClassName("flock")[i]
    .animate(
      [
        { left: x + "px" },
        { top: "100%" },


      ],
      {
        duration: 8000,
        iterations: Infinity,
        delay: Math.floor(Math.random() * 10000),

      })
  var dur = Math.floor(Math.random() * 10000);
  dur = dur < 8000 ? dur + 2000 : dur;
  document.getElementsByClassName("flock")[i]
    .animate(
      [
        { transform: "rotate(360deg)" }
      ],
      {
        duration: dur,
        iterations: Infinity,
        easing: "linear"

      })

}
