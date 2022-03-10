// initialize empty array, set counter for ids and sum for later
let diceArr = [];
let dieCounter = 0;
let sum = 0;
let diceHolder = document.getElementById("diceHolder");

class Die {
  constructor() {
    // create div for indiv Die object and give it class and id
    let dieDiv = document.createElement("div");
    dieDiv.className = "die";
    dieDiv.id = dieCounter;
    // give this div a value bw 1 and 6
    this.roll();
    // set textContent to that^ value
    dieDiv.textContent = this.value;
    // add to div on page
    diceHolder.appendChild(dieDiv);
    dieCounter++;
    // add click listener to roll indiv die and set new textContent
    dieDiv.addEventListener("click", (e) => {
      diceArr[e.target.id].roll();
      document.getElementById(e.target.id).textContent =
        diceArr[e.target.id].value;
    });
    // click listener for dbl click
    dieDiv.addEventListener("dblclick", (e) => {
      let val = diceArr[e.target.id].value;
      // remove it from diceArr using findIndex
      diceArr.splice(
        diceArr.findIndex((item) => item.value == val),
        1
      );
      // remove the div from DOM
      let remove = document.getElementById(e.target.id);
      remove.remove();

      // relabel the id on the DOM object
      for (let z = 0; z < diceArr.length; z++) {
        document.getElementsByClassName("die")[z].id = z;
      }
      // set counter to length of array so that it doesn't skip numbers when items are removed
      dieCounter = diceArr.length;
    });
  }
  // set object value to a number bw 1 and 6
  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
  }
}
// click listener for Add Die button
document.getElementById("addDie").addEventListener("click", () => {
  // create new Die object
  let d1 = new Die();
  // push object to array
  diceArr.push(d1);
});
// click listener for Roll Dice button
document.getElementById("rollDice").addEventListener("click", () => {
  // loop thru array and change value of each object
  for (let i = 0; i < diceArr.length; i++) {
    diceArr[i].roll();
    // set textContent of DOM object based on that^ value
    document.getElementById(i).textContent = diceArr[i].value;
  }
});
// click listener for Sum Dice button
document.getElementById("sumDice").addEventListener("click", function () {
  // iterate thru array using forEach to add each object's value to sum
  diceArr.forEach((die) => {
    sum += die.value;
  });
  // alert sum and reset sum variable to 0
  alert(`the sum is ${sum}.`);
  sum = 0;
});
