# typescript-destructuring-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is destructuring, conceptually?
  A: unpacking contents from arrays or objects... this allows for more concise and readable code, you're able to extract properties/elements directly into variables
- What is the syntax for `Object` destructuring?
  A: unpack properties into variables... ex:

  interface Person {
  firstName: string;
  lastName: string;
  }
  const { firstName, lastName} = person;

- What is the syntax for `Array` destructuring?
  A: const numbers: number[] = [70, 80, 90];
  destructure:
  const [x, y, z] = numbers;
- How can you tell the difference between destructuring and creating `Object`/`Array` literals?
  A: the variable is on the right side for destructure

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
