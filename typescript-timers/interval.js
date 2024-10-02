'use strict';
const $countdown = document.querySelector('.countdown-display');
let count = 4;
const intervalId = setInterval(() => {
  $countdown.textContent = count.toString();
  count--;
  if (count < 0) {
    clearInterval(intervalId);
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
