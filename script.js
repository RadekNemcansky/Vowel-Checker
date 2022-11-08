//querry Selector Returns the first matching Element node from document
// const name = document.querySelector(".cssselector")
//element.addEventListener("click", myFunction); adds event of chosen element from DOM
//modal.style.display = "block"; // object.style.display = value changing the display style of modal, Element is rendered as a block - level element
const word = document.querySelector(".text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", vowelCount);

function vowelCount() {
  let count = 0;
  let wordVal = word.value.toLowerCase();
  /*   alert(wordVal); */

  //to identify letter which is which I use for loop
  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      count++;
    }
  }
  result.innerHTML = `${word.value.toUpperCase()} has ${count} vowels`;
}
