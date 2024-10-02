const $countdown = document.querySelector('.countdown-display') as HTMLElement;
let count: number = 4;
const intervalId: any = setInterval(() => {
  $countdown.textContent = count.toString();
  count--;
  if (count < 0) {
    clearInterval(intervalId);
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
