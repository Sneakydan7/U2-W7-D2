let nameBox = document.getElementById("name");
let surnameBox = document.getElementById("surname");

let form = document.getElementById("form");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");

form.onsubmit = function (e) {
  let name = nameBox.value;
  let surname = surnameBox.value;
  e.preventDefault();
  localStorage.setItem("Name", name);
  localStorage.setItem("Surname", surname);

  let h3 = document.getElementById("h3");
  h3.innerText = name + " " + surname;
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
  document.getElementById("timer").innerText = timePassing + " secondi";
}

setInterval(updateTime, 1000);
