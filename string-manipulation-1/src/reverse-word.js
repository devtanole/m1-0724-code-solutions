'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let revStr = '';
  for (let i = word.length - 1; i >= 0; i--) {
    revStr += word[i];
  }
  return revStr;
}
