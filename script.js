// get elememmt from html
const div = document.querySelector(".container");
const number = prompt("Enter a positive number: ");

const primeNumber = (Number) => {
  for (let index = 2; index < Number; index++) {
    if (Number % index === 0) {
      return false;
    }
  }
  return true;
};
for (let index = 0; index < number; index++) {
  const newElement = document.createElement("div");
  newElement.textContent = index;
  div.appendChild(newElement);

  if (index % 2 == 0) {
    newElement.style.background = "yellow";
  } else newElement.style.background = "green";

  if (primeNumber(index)) {
    newElement.style.border = "10px  solid  red";
  }
}

console.log(primeNumber(5));
