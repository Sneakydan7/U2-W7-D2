let nameBox = document.getElementById("name");
let surnameBox = document.getElementById("surname");

let form = document.getElementById("form");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");

window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("Name");
  const savedSurame = localStorage.getItem("Surname");
  let savingSpace = document.getElementById("saved-name");
  if (savedName) {
    savingSpace.value = savedName;
  }
});

form.onsubmit = function (e) {
  let name = nameBox.value;
  let surname = surnameBox.value;
  e.preventDefault();
  localStorage.setItem("Name", name);
  localStorage.setItem("Surname", surname);

  let h3 = document.createElement("h3");
  h3.innerText = name + " " + surname;

  let savingSpace = document.getElementById("saved-name");
  savingSpace.appendChild(h3);
};

reset.addEventListener("click", function () {
  localStorage.removeItem("Name");
  localStorage.removeItem("Surname");
  let savingSpace = document.getElementById("saved-name");
  let h3 = document.querySelector("h3");
  savingSpace.removeChild(h3);
});

let startTimer = sessionStorage.getItem("startTime");
if (!startTimer) {
  startTimer = new Date().getTime();
  sessionStorage.setItem("startTime", startTimer);
}

function updateTime() {
  let currentTime = new Date().getTime();
  let timePassing = Math.floor((currentTime - startTimer) / 1000);
  document.getElementById("timer").textContent = timePassing + " secondi";
}

setInterval(updateTime, 1000);
