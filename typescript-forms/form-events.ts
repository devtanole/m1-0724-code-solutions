function handleFocus(event: Event): void {
  console.log('focus event fired');
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('event target:', $eventTarget);
}

function handleBlur(event: Event): void {
  console.log('blur event fired');
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('event target:', $eventTarget);
}

function handleInput(event: Event): void {
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(
    'event target name and value:',
    $eventTarget.name,
    $eventTarget.value
  );
}

const $input1 = document.querySelector('#user-name');
if (!$input1) throw new Error('$input1 does not exist');
const $input2 = document.querySelector('#user-email');
if (!$input2) throw new Error('$input2 does not exist');
const $textArea = document.querySelector('textarea');
if (!$textArea) throw new Error('$textarea does not exist');

$input1.addEventListener('focus', handleFocus);
$input1.addEventListener('blur', handleBlur);
$input1.addEventListener('input', handleInput);

$input2.addEventListener('focus', handleFocus);
$input2.addEventListener('blur', handleBlur);
$input2.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
