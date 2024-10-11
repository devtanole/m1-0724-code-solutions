import { takeAChance } from './take-a-chance.js';
takeAChance('Devin')
  .then((message: string) => console.log(message))
  .catch((error: Error) => console.error(error.message));
