let playerSelection;
let computerSelection;

const inputBoxValue = document.querySelector(".inputBox");
const outputBoxValue = document.querySelector(".outputBox");

inputBoxValue.addEventListener("change", function () {
    let playerSelection = inputBoxValue.value;
    const result = favoriteAnimal(inputAnimal);
    outputBoxValue.textContent = result;
})
