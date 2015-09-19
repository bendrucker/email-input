'use strict'

var Input = require('base-input')
var emailRegex = require('email-regex')({exact: true})
var isEmail = emailRegex.test.bind(emailRegex)

module.exports = Input({
  validate: isEmail,
  options: {
    type: 'email',
    name: 'email'
  }
})
