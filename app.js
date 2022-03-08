let diceArr = [];
let dieCounter = 0;
let sum = 0;
let diceHolder = document.getElementById("diceHolder");

class Die {
  constructor() {
    let dieDiv = document.createElement("div");
    dieDiv.className = "die";
    dieDiv.id = dieCounter;
    this.roll();
    dieDiv.textContent = this.value;
    diceHolder.appendChild(dieDiv);
    dieCounter++;
  }

  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
  }
}

document.getElementById("addDie").addEventListener("click", () => {
  let d1 = new Die();
  diceArr.push(d1);
});

document.getElementById("rollDice").addEventListener("click", () => {
  for (let i = 0; i < diceArr.length; i++) {
    diceArr[i].roll();
    document.getElementById(i).textContent = diceArr[i].value;
  }
});

document.getElementById("sumDice").addEventListener("click", function () {
  diceArr.forEach((die) => {
    sum += die.value;
  });
  alert(`the sum is ${sum}.`);
  sum = 0;
});
