"use strict";
const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", vowelCheck);

function vowelCheck() {
  let vowelCount = 0; //set vowel count to 0
  let wordValue = word.value.toLowerCase();
  alert(wordValue);

  for (let i = 0; i < wordValue.length; i++) {
    //loop through the letters in the word
    let letter = wordValue[i]; //current letter
    if (letter.match(/([a,e,i,o,u])/)) {
      //using regular expressions
      vowelCount++;
    }
  }
  result.innerHTML = `${wordValue.toUpperCase()} contains ${vowelCount} vowels`;
}
