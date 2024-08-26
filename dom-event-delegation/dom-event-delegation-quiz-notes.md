# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  A: a reference to the object onto which the event was dispatched.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  A: due to event bubbling
- What DOM element property tells you what type of element it is?
  A: .tagName
- What does the `element.closest()` method take as its argument and what does it return?
  A: argument is CSS selector and it returns the closest ancestor element
- How can you remove an element from the DOM?
  A: remove method .remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  A: put the event listener on parent elements

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
