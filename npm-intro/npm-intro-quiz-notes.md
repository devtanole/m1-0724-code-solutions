# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  A: started as node package manager, is a public registry with reusable code from other developers
- What is a package?
  A: a directory with one or more files
- What are some other popular package managers?
  A: homebrew, pip, maven
- How can you create a `package.json` with `npm`?
  A: running a CLI questionnaire or creating a default package.json . to run the questionnaire navigate to the root directory of the package, type npm init and answer the questions
- What is a dependency and how do you add one to a package?
  A where one component relies on another to function. add by using command line or manually editing package.json . install to root directory using '--save-prod' or '--save-dev'
- What happens when you add a dependency to a package with `npm`?
  A: npm installs the package and adds it to the dependencies object in package.json
- What is a devDependency and how do you add one to a package?
  A: devDependency is only required during development, not production. done with '--save-dev' or run command 'npm install <package-name> --save-dev'

- How do you define and run `npm` scripts? Why are these useful?
  A: set its name and write the script under the scripts property of the package.json. scripts can save time and maximize efficiency

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
