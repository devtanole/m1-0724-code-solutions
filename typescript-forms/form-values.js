'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('$contactForm does not exist');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('form submitted');
  const $formElements = $contactForm.elements;
  let formObj = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('form data:', formObj);
  $contactForm.reset();
});
