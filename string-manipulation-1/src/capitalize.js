'use strict';
/* exported capitalize */
function capitalize(word) {
  const capped = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capped;
}
