let div = document.querySelectorAll(".section-list li");
let body = document.querySelector("body");

body.classList.add("active");


let myFunc = function (div, body) {
  div.forEach(function (event) {
    event.addEventListener('click', (element) => {
      body.classList.remove("active");
      window.localStorage.setItem("backGround", element.currentTarget.dataset.color);
      body.style.backgroundImage = window.localStorage.getItem("backGround");
    });

    if (localStorage.getItem("backGround")) {
      body.style.backgroundImage = localStorage.getItem("backGround");
    }
  });
};

myFunc(div, body);