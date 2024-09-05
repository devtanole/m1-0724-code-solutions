const $openMod = document.querySelector('.open-modal');
const $dismissMod = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');

if (!$openMod) throw new Error('$openMod does not exist');
if (!$dismissMod) throw new Error('$dismissMod does not exist');
if (!$dialog) throw new Error('$dialog does not exist');

$openMod.addEventListener('click', () => {
  $dialog.showModal();
});

$dismissMod.addEventListener('click', () => {
  $dialog.close();
});
