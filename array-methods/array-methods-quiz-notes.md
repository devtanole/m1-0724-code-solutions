# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do?
    A: executes the callback function once for each array element
  - What should the callback function do?
    A: take an element as an argument, return undefined
  - What is `Array.forEach` useful for?
    A: execute side effects at end of chain
- `Array.map`:
  - What does `Array.map` do?
    A: creates new array with the results of calling a provided function on every element in the calling array.
  - What should the callback function return?
    A: a new array
  - What is `Array.map` useful for?
    A: iterating through objects in an array and modifying the content of each object and returning a new array
- `Array.find`:
  - What does `Array.find` do?
    A: returns the first element in the provided array that satisfies the provided testing function, if no values satisfy... is undefined
  - What should the callback function return?
    A: truthy value to indicate matching element has been found, falsy otherwise
  - What is `Array.find` useful for?
    A: finding and returning the first occurence of an element in an array, under a defined testing function
- `Array.filter`:
  - What does `Array.filter` do?
    A: creates a shallow copy of a portion of a given array, filtered to just the elements that pass the test implemented by the provided function
  - What should the callback function return?
    A: a truthy value to keep the element in the resulting array, falsy otherwise
  - What is `Array.filter` useful for?
    A: filtering out undeeded elements

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
