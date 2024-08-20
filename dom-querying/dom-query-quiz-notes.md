# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  A: for printing messages to the console and debugging code.
- What is a "model"?
  A: model defines the data structure
- Which "document" is being referred to in the phrase Document Object Model?
  A: the document is what allows us to manipulate the html
- What is the word "object" referring to in the phrase Document Object Model?
  A: the object is whichever node is being used/targeted.
- What is a DOM Tree?
  A: a hierarchical representation of an html doc as a node tree in a browser. according to dom tree, every html tag is an object. every element is a node in the tree.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  A: document.querySelector('p'); and document.getElementByClassName('class1');
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  A: getElementsByTagName and getElementsByClassName
- Why might you want to assign the return value of a DOM query to a variable?
  A: Each time we query the DOM for an element reference, it requires the interface to search through all of the HTML so that it can find the elements we are looking for. Using a variable saves the reference, making another search unnecessary.
- What `console` method allows you to inspect the properties of a DOM element object?
  A: console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  A: The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.
- What does `document.querySelector()` take as its argument and what does it return?
  A: takes any CSS selector and returns the first element that matches
- What does `document.querySelectorAll()` take as its argument and what does it return?
  A: takes any CSS selector and returns all elements in the doc that match the specified selector.

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
