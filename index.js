'use strict'

var State = require('dover')
var Observ = require('observ')
var emailRegex = require('email-regex')({exact: true})
var isEmail = emailRegex.test.bind(emailRegex)
var h = require('virtual-dom/h')
var changeEvent = require('value-event/change')

module.exports = EmailInput

function EmailInput (data) {
  data = data || {}

  var state = State({
    value: Observ(data.value || ''),
    valid: Observ(isEmail(data.value) || false),
    placeholder: Observ(data.placeholder || ''),
    channels: {
      change: change
    }
  })

  state.value(function (email) {
    state.valid.set(isEmail(email))
  })

  return state
}

function change (state, data) {
  state.value.set(data.email)
}

EmailInput.render = function render (state) {
  return h('input', {
    type: 'email',
    value: state.value,
    name: 'email',
    'ev-event': changeEvent(state.channels.change),
    placeholder: state.placeholder
  })
}
