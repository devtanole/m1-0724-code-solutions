const $heading = document.querySelector('.message') as HTMLElement;
function helloThere(): any {
  $heading.textContent = 'Hello There';
}

setTimeout(helloThere, 2000);
