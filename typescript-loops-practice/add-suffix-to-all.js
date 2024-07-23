'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  let suffArr = [];
  for (let i = 0; i < words.length; i++) {
    suffArr[i] = words[i] + suffix;
  }
  return suffArr;
}
