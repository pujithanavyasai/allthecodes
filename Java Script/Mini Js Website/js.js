const decrement = document.getElementById("decrementbtn");
const reset = document.getElementById("resetbtn");
const increment = document.getElementById("incrementbtn");
const label = document.getElementById("label");
let displaynum = parseInt(label.textContent);
decrement.onclick = function(){
    displaynum--;
    label.textContent = displaynum;
}
reset.onclick = function(){
    displaynum = 0;
    label.textContent = displaynum;
}
increment.onclick = function(){
    displaynum++;
  label.textContent = displaynum;
}

let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
const roller_but = document.getElementById("roller_but");
roller_but.onclick = function(){
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;
    let random3 = Math.floor(Math.random() * 6) + 1;
    ans1.textContent = `🎲:${random1}`;
    ans2.textContent = `🎲:${random2}`;
    ans3.textContent = `🎲:${random3}`;
}

const ngg_value = document.getElementById("number_input_ngg");
const ngg_but = document.getElementById("nggbut");
const ngg_result = document.getElementById("ngg_result");
let guessed_num = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let play_ngg = true;
ngg_but.onclick = function () {
    if (play_ngg === false) {
        ngg_result.textContent = "Refresh the page to play again with a new number";
    } else {
        let value_ngg = Number(ngg_value.value);
        if (value_ngg >= 1 && value_ngg <= 100) {
            if (value_ngg > guessed_num) {
                ngg_result.textContent = "Too High! Guess a low number";
            } else if (value_ngg < guessed_num) {
                ngg_result.textContent = "Too Low! Guess a high number";
            } else if (value_ngg === guessed_num) {
                ngg_result.textContent = "Yaay! Correct. You guessed it right!";
                play_ngg = false;
            }
        } else {
            ngg_result.textContent = "Please choose a number between 1 and 100";
        }
    }
}

const temp_input = document.getElementById("temp_input");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const temp_button = document.getElementById("temp_convert");
const temp_result = document.getElementById("temp_result");
temp_button.onclick = function(){
    if (temp_input.value === ""){
        temp_result.textContent = 'Please enter a Numeric Value in the Input';
    } else{
        temp_result.textContent = '';
        if (toF.checked){
            temp_result.textContent = ((Number(temp_input.value) * 9/5) + 32).toFixed(1)+"°F";
        } else if (toC.checked){
            temp_result.textContent = ((Number(temp_input.value) -32) * (5/9)).toFixed(1)+"°C";
        }
    }
}