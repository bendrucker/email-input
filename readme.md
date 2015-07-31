# email-input [![Build Status](https://travis-ci.org/bendrucker/email-input.svg?branch=master)](https://travis-ci.org/bendrucker/email-input)

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

###### valid

Type: `boolean`

The validity state of the email. Treat as read only.

###### placeholder

Type: `string`

The placeholder for the `<input>`

#### `EmailInput.render(state)` -> `object`

Render an email state to a vtree object.

## License

MIT © [Ben Drucker](http://bendrucker.me)
