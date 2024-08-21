# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  A: printing messages and debugging.
- What is the purpose of events and event handling?
  A: event handling is for responding to user actions and interactions with a page. events are objects passed as arguments to event handlers.
- Are all possible parameters required to use a JavaScript method or function?
  A: no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  A: Event listener
- What is a callback function?
  A: a callback function is a function passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
  A: the function being called
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  A: event.target refers to the element responsible for firing the event. your console log can print more info.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  A: the function is being called instead of called back on the bottom which is incorrect.

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
