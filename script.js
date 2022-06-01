"use strict";
class DigitalSnow {
  constructor() {
    this.container = document.getElementById("elementsContainer");
    this.elementsVector = []; //Contem os elementos criados e renderizados em tela
  }

  createListener(eventType, functionEvent) {
    document.addEventListener(eventType, functionEvent);
  }

  setEventListeners() {
    var toqueinit = 0;
    this.createListener("mousemove", (e) => {
      var elements = document.getElementsByClassName("neve");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.left =
          this.elementsVector[i] + e.clientX - window.outerWidth / 2 + "px";
      }
    });
    this.createListener("touchstart", (e) => {
      toqueinit = e.targetTouches[0].pageX;
    });
    this.createListener("touchmove", (e) => {
      var value = -1 * (toqueinit - e.targetTouches[0].pageX);
      var elements = document.getElementsByClassName("neve");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.left = this.elementsVector[i] + value + "px";
      }
    });
  }

  init() {
    this.setEventListeners();
    this.renderNeve();
    this.renderFlock();
  }

  renderNeve() {
    for (let i = 0; i < 50; i++) {
      var node = document.createElement("span");
      node.setAttribute("class", "neve");
      var x = Math.floor(
        Math.random() * 4 * window.outerWidth - window.outerWidth
      );
      this.elementsVector.push(x);
      node.setAttribute("style", "left:" + x + "px; top: -8px;");
      this.container.appendChild(node);
      document
        .getElementsByClassName("neve")
        [i].animate([{ left: x + "px" }, { top: "100%" }], {
          duration: 5000,
          iterations: Infinity,
          delay: Math.floor(Math.random() * 100 * i),
        });
    }
  }

  renderFlock() {
    for (let i = 0; i < 20; i++) {
      var x =  Math.floor(Math.random() * 2600)
      var node = new FlockElement({
        xPos: x,
        yPos: -27

      })
      this.container.appendChild(node.element);
      document
        .getElementsByClassName("flock")
        [i].animate([{ left: x + "px" }, { top: "100%" }], {
          duration: 8000,
          iterations: Infinity,
          delay: Math.floor(Math.random() * 10000),
        });
      var dur = Math.floor(Math.random() * 10000);
      dur = dur < 8000 ? dur + 2000 : dur;
      document
        .getElementsByClassName("flock")
        [i].animate([{ transform: "rotate(360deg)" }], {
          duration: dur,
          iterations: Infinity,
          easing: "linear",
        });
    }
  }
}


class FlockElement {
  constructor({xPos: x, yPos: y}) {
    this.element = document.createElement("img");
    this.position = {
      x, 
      y
    }
    this.defineAttributes();
  }
  defineAttributes() {
    this.element.setAttribute("class", "flock");
    this.element.setAttribute("src", "./flock.svg");

    this.element.setAttribute("style", `left: ${this.position.x}px; top: ${this.position.y}px;`);
  }
}

const page = new DigitalSnow();
page.init();
