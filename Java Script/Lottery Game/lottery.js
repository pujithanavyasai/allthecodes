  const playButton = document.getElementById("pbutt");
  const resultText = document.getElementById("text");
  const listCont = document.getElementById("gifts-cont");
  const tap = new Audio("tapsound.mp3");
  const win = new Audio("coinsound.mp3");

  giftsList = [
    "Laptop", "Mobile", "Watch", "Speaker", "Headset", "Tablet", "Camera", "Console", "Charger", "Mouse",
    "Keyboard", "Monitor", "Drone", "Toaster", "Blender", "Vacuum", "Iron", "Fridge", "AC", "Heater",
    "Fan", "Light", "Mirror", "Bottle", "Mug", "Candle", "Perfume", "Wallet", "Belt", "Bag",
    "Purse", "Teddy", "Puzzle", "Book", "Pen", "Diary", "Frame", "Painting", "Makeup", "Lipstick",
    "Eyeliner", "Sunscreen", "Cream", "Lotion", "Shampoo", "Hairdryer", "Straightener", "Curler", "Ring", "Chain","vinuthna"
  ];
  giftsList.forEach(function(value,i){
      listCont.insertAdjacentHTML("beforeend",`<div class="gift-box " id="${i+1}">${i+1}. ${value}</div>`);
  });
  playButton.addEventListener("click",function(){
      
      playButton.disabled = true;
      giftsList.forEach((value,i)=>{
        document.getElementById(`${i+1}`).classList.remove("won");
      });
      let counter = 5;
      const time = setInterval(() => {
        const random = Math.floor(Math.random() * giftsList.length) + 1;
        const box = document.getElementById(`${random}`);
        resultText.textContent = `Result in ${counter} seconds`;
        for (let val = 1; val <= giftsList.length; val++) {
          const currentBox = document.getElementById(`${val}`);
          if (val === random) {
            tap.pause();
            tap.currentTime =0;
            tap.play();
            currentBox.classList.add("random");
          } else {
            currentBox.classList.remove("random");
          }
        };
        counter-=1
        if (counter===0){
          win.pause();
          win.currentTime =0;
          win.play(); 
          const box = document.getElementById(`${random}`);
          box.classList.add("won");
          resultText.textContent = `Congratulations! You won ${random}. ${giftsList[random-1]}!`;
          clearInterval(time);
          playButton.disabled = false;
          };       
      }, 1000);
      
  });