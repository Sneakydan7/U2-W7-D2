let nameBox = document.getElementById("name");
let surnameBox = document.getElementById("surname");

let form = document.getElementById("form");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
window.addEventListener("DOMContentLoaded", () => {
  let h3 = document.querySelector("h3");
  let name = localStorage.getItem("Name");
  let surname = localStorage.getItem("Surname");
  if (name && surname) {
    h3.innerText = name + " " + surname;
  }
});
form.onsubmit = function (e) {
  e.preventDefault();
  let name = nameBox.value;
  let surname = surnameBox.value;
  localStorage.setItem("Name", name);
  localStorage.setItem("Surname", surname);

  let h3 = document.getElementById("h3");
  h3.innerText = name + " " + surname;
};

reset.addEventListener("click", function () {
  localStorage.removeItem("Name");
  localStorage.removeItem("Surname");
  let h3 = document.querySelector("h3");
  h3.innerText = "";
});

let startTimer = sessionStorage.getItem("startTime");
if (!startTimer) {
  startTimer = new Date().getTime();
  sessionStorage.setItem("startTime", startTimer);
}

function updateTime() {
  let currentTime = new Date().getTime();
  let timePassing = Math.floor((currentTime - startTimer) / 1000);
  document.getElementById("timer").innerText = timePassing + " secondi";
}

setInterval(updateTime, 1000);
