'use strict';
/* exported getWords */
function getWords(string) {
  let words = [];
  let word = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      if (word !== '') {
        words.push(word);
        word = '';
      }
    } else {
      word += string[i];
    }
  }
  if (word !== '') {
    words.push(word);
  }
  return words;
}
