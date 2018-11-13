# email-input [![Build Status](https://travis-ci.org/bendrucker/email-input.svg?branch=master)](https://travis-ci.org/bendrucker/email-input) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/email-input.svg)](https://greenkeeper.io/)

> Email input component for virtual-dom


## Install

```
$ npm install --save email-input
```


## Usage

```js
var EmailInput = require('email-input')
var emailInput = EmailInput()

function render (state) {
  var vtree = EmailInput.render(state)
  //=> use virtual-dom to patch vtree into real DOM
}

emailInput(render)
```

## API

#### `EmailInput(data)` -> `function`

Create a new email input observable.

##### data

Type: `object`

The initial state of the input.

###### value

Type: `string`

The email address.

#### `EmailInput.validate(state)` -> `boolean`

Validate the email input state.

#### `EmailInput.render(state, options)` -> `object`

Render an email state to a vtree object. `options` will be merged with the defaults (`{type: 'email', name: 'email'}`) and passed to [virtual-hyperscript](https://github.com/Matt-Esch/virtual-dom/tree/master/virtual-hyperscript).

## License

MIT © [Ben Drucker](http://bendrucker.me)
