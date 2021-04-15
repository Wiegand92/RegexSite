# Regex Site

## About

This is a group project to make a regex test site. Current team is Alex, Dustin, & Nick.

## Technologies Used

Currently we are using:

  ### Front-End
  - React (With [hooks](https://reactjs.org/docs/hooks-intro.html)) 
  - [TailwindCSS](https://tailwindcss.com/docs) 
  - [Chakra-UI](https://chakra-ui.com/docs/getting-started)
  - [Sass](https://sass-lang.com/documentation)

  ### Back-End
  - [Express](https://expressjs.com/en/4x/api.html)

  ### 3rd Party
  - [Lodash](https://lodash.com/docs/4.17.15)
  - [Validator](https://github.com/validatorjs/validator.js)

  ### Bundled With
  - [Webpack](https://webpack.js.org/concepts/)

## Style Guide

  I'm not firmly set on any rules just yet, but here are some of what I gather to be best practices atm. I think we should get this together before we go too much further just to get everyone on the same page.

  1. Use semi-colons
  2. Lets try and use hooks as this is the current standard with react.
  3. I like 2 space indents, but don't particularly care.
  4. I think that the utility classes look better in the css than inline. Done with @apply(examples in 'src/styles/base/_base.scss')
  5. I like to set a className with the component name on the react parent and singly nest the scss, that way we maintain specificity without too many messy BEM classes. If there is a need to specify between two tags then I will give them a className (example in 'src/styles/components/_app.scss')
  6. Let me know if anyone has anything else to say on this!