# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  A: AND evaluates expr2 if expr1 is truthy, OR examines 2 if 1 is falsy. They can be used for assigning values to variables or for logging to console.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  A: short circuit is if the result of one conversion is false, the operator stops and returns the original value
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  A: nullish returns expr2 if expr1 is null or undefined and differs from OR because OR only examines 2 if 1 is falsy
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  A: ternary evaluates expre1 if the condition is true or will otherwise evaluate expr2. if/else is for more complex
- What is the `?.` (optional chaining) operator? When would you use it?
  A: optional chaining returns undefined if obj is null or undefined and otherwise returns obj.prop . can be used for if something exists or does not exist, optional chaining will take care of what the value is. such as when declaring variables or logging possible properties. can be used when attempting to call a method which may not exist
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  A: allows iterables to be expanded. use an ellipses with the arr or obj name.

ex: obj = {id: 1, name: 'Alice'};
newObj = {...obj, age: 25};

console.log(newObj);
this would return {id: 1, name: 'Alice', age:25};

- What data types can be spread into an array? Into an object?
  A: any iterable value such as array and string
- How does spread syntax differ from rest syntax?
  A: spread expands an array into its elements whereas rest condenses into a single element

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
