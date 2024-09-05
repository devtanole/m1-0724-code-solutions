const bookArr: unknown[] = [
  { isbn: '1111111', title: 'The Book of Disquiet', author: 'Fernando Pessoa' },
  { isbn: '22222222', title: 'The Bell Jar', author: 'Sylvia Plath' },
  { isbn: '3333333', title: 'Circe', author: 'Madeline Miller' },
];

console.log('bookArr:', bookArr);
console.log('bookArr typeof:', typeof bookArr);

const bookJSON = JSON.stringify(bookArr);
console.log('bookJSON:', bookJSON);
console.log('typeof bookJSON:', typeof bookJSON);

const strJSON: string = '{"number id": "12345", "string name": "Rick Blaine"}';
console.log('strJSON:', strJSON);
console.log('typeof strJSON:', typeof strJSON);

const $strJSONParse: unknown = JSON.parse(strJSON);
console.log('$strJSONParse:', $strJSONParse);
console.log('typeof $strJSONParse:', typeof $strJSONParse);
