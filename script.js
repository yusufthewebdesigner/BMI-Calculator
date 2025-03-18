let height = document.getElementById("height");
let weight = document.getElementById("weight");
let button = document.getElementById("button");
let score = document.getElementById("score");
let scoreBox = document.getElementById("scoreBox");

button.addEventListener("click", function () {
  let heightValue = parseFloat(height.value);
  let heightInMeter = heightValue / 100;
  let weightValue = parseFloat(weight.value);
  let BMI = weightValue / (heightInMeter * heightInMeter);
  finalBMI = BMI.toFixed(2);
  score.innerText = finalBMI;
  scoreBox.style.display = "block";
  if (finalBMI < 18.6) {
    score.style.backgroundColor = "#f39c12";
  } else if (finalBMI < 24.9) {
    score.style.backgroundColor = "green";
  } else {
    score.style.backgroundColor = "red";
  }
});

// For DarkMode
function toogleSwitch() {
  let icon = document.getElementById("switch");
  if (icon.classList.value.match("moon")) {
    icon.classList.value = "fa-solid fa-sun";
    icon.style.color = "#fff";
  } else {
    icon.classList.value = "fa-solid fa-moon";
    icon.style.color = "#000";
  }
  document.getElementById("main").classList.toggle("darkModeClass");
}
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
});
