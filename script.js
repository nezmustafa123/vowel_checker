const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

// odd number of letters first two and last two the same one left standalone the letter that's the odd one out will always be in the middle

function palindrome() {
  const word = document.querySelector(".input-text").value;
  let length = word.length;
  //get first letters
  //if odd will round down and get a certain number of letters, e.g 7/2 = 3.5 rounded down will get 3
  let start = word.substring(0, Math.floor(length / 2)).toLowerCase();
  let end = word.substring(length - Math.floor(length / 2)).toLowerCase(); //start from whichever index in string is result of expression

  //compare the end letters with first letters by flipping the last ones
  ///let flip = end.split("").reverse().join(""); //split into array and reverse the array turn it into a string again

  let flip = [...end].reverse().join(""); //spread intot an array then reverse join

  if (start == flip) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome`;
  } else {
    result.innerHTML = `${word.toUpperCase()} is not a palindrome`;
  }
  //   alert(flip);
  //   alert(start);
  //   alert(end);
}
// console.log(5 % 2);
