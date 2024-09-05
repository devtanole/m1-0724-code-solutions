interface HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}
interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;
if (!$contactForm) throw new Error('$contactForm does not exist');
$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  console.log('form submitted');
  const $formElements: FormElements = $contactForm.elements;
  const formObj = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('form data:', formObj);
  $contactForm.reset();
});
