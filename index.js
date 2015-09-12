'use strict'

var State = require('dover')
var Observ = require('observ')
var watch = require('observ/watch')
var pipe = require('value-pipe')
var emailRegex = require('email-regex')({exact: true})
var isEmail = emailRegex.test.bind(emailRegex)
var extend = require('xtend')
var h = require('virtual-dom/h')
var changeEvent = require('value-event/change')

module.exports = EmailInput

function EmailInput (data) {
  data = data || {}

  var state = State({
    value: Observ(data.value || ''),
    valid: Observ(false),
    channels: {
      change: change
    }
  })

  watch(state.value, pipe(isEmail, state.valid.set))

  return state
}

function change (state, data) {
  state.value.set(data[data.name])
}

var defaults = {
  type: 'email',
  name: 'email'
}

EmailInput.render = function render (state, options) {
  options = extend(defaults, options || {})

  options = extend(options, {
    value: state.value,
    'ev-event': changeEvent(state.channels.change, {
      name: options.name
    })
  })

  return h('input', options)
}
