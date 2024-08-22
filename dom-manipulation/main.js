'use strict';
let userClicks = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotButton query failed');
function handleClick() {
  userClicks++;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  $clickCount.textContent = `Clicks: ${userClicks}`;
  if (userClicks < 4) {
    $hotButton.className = ' hot-button cold';
  } else if (userClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (userClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (userClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (userClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', handleClick);
