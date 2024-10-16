# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  A: code is read sequentially. await tells JS to wait or pause until asynchronous function completes
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  A: promise.then and .catch is harder to chain Promises and handle errors with
- When do you use `async`?
  A: write before function declaration
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  A: wherever you need JS to pause until a promise is returned
- How do you handle errors with `await`?
  A: try/catch/finally
- What do `try`, `catch` and `throw` do? When do you use them?
  A: try contains one or more statements and can throw exceptions, catch catches exception and specifies what to do
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  A: JS does not pause
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  A: i feel most comfortable with promise.then

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
