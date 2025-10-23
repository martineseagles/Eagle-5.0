function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const r = getRandomNumber(0, 255);
  const g = getRandomNumber(0, 255);
  const b = getRandomNumber(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const randomColors = [];
for (let i = 0; i < 5; i++) {
  randomColors.push(getRandomColor());
}

console.log("Random Colors Generated:", randomColors);

function changeBackgroundColor() {
  const randomIndex = getRandomNumber(0, randomColors.length - 1);
  document.body.style.backgroundColor = randomColors[randomIndex];
}

setInterval(changeBackgroundColor, 2000);

window.onload = () => {
  alert("Welcome to the Random JavaScript Page!");
};

const randomNum = getRandomNumber(1, 100);
console.log(`Random Number between 1 and 100: ${randomNum}`);
