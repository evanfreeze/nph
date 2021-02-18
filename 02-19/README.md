# Friday, February 19, 2021

This time we're going to introduce unit testing with Jest, React Testing Library, and Jest DOM.

## Things to install

* Add [Jest](https://jestjs.io/docs/en/getting-started.html)
* Add [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* Add [Jest DOM](https://github.com/testing-library/jest-dom)

Add all of these by running...
```bash
npm install --save-dev jest @testing-libaray/react @testing-library/jest-dom
```
...or a shorthand version...
```bash
npm i -D jest @testing-libaray/react @testing-library/jest-dom
```

## Why unit tests

Sure, you can manually test your app every time you change something and that works. But as things get more complex, it becomes unsustainable to manually check every possible feature after every change. Why not write code that will do it for you?

## Setting up Jest with Parcel

Jest doesn't get to use Parcel's transpiling, so we need to use Babel in our tests in order for them to understand React. Follow these docs to set it up: [Setup without Create React App](https://jestjs.io/docs/en/tutorial-react#setup-without-create-react-app)
