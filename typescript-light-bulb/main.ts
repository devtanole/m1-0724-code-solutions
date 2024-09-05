const lightBulb: any = document.querySelector('.bulb');
const container: any = document.querySelector('.bulb-container');

lightBulb?.addEventListener('click', () => {
  lightBulb.classList.toggle('on');
  container.classList.toggle('on');
});

/* lightBulb.className = 'bulb on';
  container.className = 'bulb-container on'; */
