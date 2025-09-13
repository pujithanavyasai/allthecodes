const playButton = document.getElementById("pbutt");
const resultText = document.getElementById("text");
const listCont = document.getElementById("gifts-cont");
const tap = new Audio("tapsound.mp3");
const win = new Audio("coinsound.mp3");

giftArray = [
  "Laptop", "Mobile", "Watch", "Speaker", "Headset", "Tablet", "Camera", "Console", "Charger", "Mouse",
  "Keyboard", "Monitor", "Drone", "Toaster", "Blender", "Vacuum", "Iron", "Fridge", "AC", "Heater",
  "Fan", "Light", "Mirror", "Bottle", "Mug", "Candle", "Perfume", "Wallet", "Belt", "Bag",
  "Purse", "Teddy", "Puzzle", "Book", "Pen", "Diary", "Frame", "Painting", "Makeup", "Lipstick",
  "Eyeliner", "Sunscreen", "Cream", "Lotion", "Shampoo", "Hairdryer", "Straightener", "Curler", "Ring", "Chain"
];


function setupGifts() {
  listCont.innerHTML = ""; 
  let width = window.innerWidth;
  let giftsList = [];

  if (width <= 1024) {
    const inSmall = 20;
    for (let i = 0; i < inSmall; i++) {
      const random = Math.floor(Math.random() * giftArray.length);
      giftsList.push(giftArray[random]);
    }
  } else {
    const inSmall = giftArray.length;
    for (let i = 0; i < inSmall; i++) {
      const random = Math.floor(Math.random() * giftArray.length);
      giftsList.push(giftArray[random]);
    }
  }

  giftsList.forEach(function (value, i) {
    listCont.insertAdjacentHTML("beforeend", `<div class="gift-box" id="${i + 1}">${i + 1}. ${value}</div>`);
  });

  return giftsList;
}


let giftsList = setupGifts();

window.addEventListener("resize", () => {
  giftsList = setupGifts();
});

playButton.addEventListener("click", function () {
  playButton.disabled = true;
  giftsList.forEach((value, i) => {
    document.getElementById(`${i + 1}`).classList.remove("won");
  });

  let counter = 5;
  const time = setInterval(() => {
    const random = Math.floor(Math.random() * giftsList.length);
    const box = document.getElementById(`${random + 1}`);
    resultText.textContent = `Result in ${counter} seconds`;

    for (let val = 1; val <= giftsList.length; val++) {
      const currentBox = document.getElementById(`${val}`);
      if (val === random + 1) {
        tap.pause();
        tap.currentTime = 0;
        tap.play();
        currentBox.classList.add("random");
      } else {
        currentBox.classList.remove("random");
      }
    }

    counter -= 1;

    if (counter === 0) {
      win.pause();
      win.currentTime = 0;
      win.play();
      const box = document.getElementById(`${random + 1}`);
      box.classList.add("won");
      resultText.textContent = `Congratulations! You won ${random + 1}. ${giftsList[random]}!`;
      clearInterval(time);
      playButton.disabled = false;
    }
  }, 1000);
});
