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
    dieDiv.addEventListener("click", (e) => {
      diceArr[e.target.id].roll();
      document.getElementById(e.target.id).textContent = diceArr[e.target.id].value;      
    });
    dieDiv.addEventListener("dblclick", (e) => {
      let val = diceArr[e.target.id].value;
      diceArr.splice(
        diceArr.findIndex((item) => item.value == val),
        1
      );
      let remove = document.getElementById(e.target.id);
      remove.remove();
  
      for (let z = 0; z < diceArr.length; z++) {
        diceArr[z].id = z;
        document.getElementsByClassName("die")[z].id = z;
      }
      dieCounter = diceArr.length;
    });
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
  console.log(diceArr);
});

document.getElementById("sumDice").addEventListener("click", function () {
  diceArr.forEach((die) => {
    sum += die.value;
  });
  alert(`the sum is ${sum}.`);
  sum = 0;
});
