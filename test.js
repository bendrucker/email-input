'use strict'

var test = require('tape')
var raf = require('raf')
var dispatchEvent = require('dispatch-event')
var thermometer = require('thermometer')
var EmailInput = require('./')

var render = thermometer.createComponent(EmailInput)

test('state to dom', function (t) {
  t.plan(1)
  render(function (state, element, done) {
    state.value.set('bvdrucker+1@gmail.com')
    raf(function () {
      t.equal(element.value, 'bvdrucker+1@gmail.com')
      done()
    })
  })
})

test('dom to state', function (t) {
  t.plan(2)
  render(function (state, element, done) {
    element.value = 'bvdrucker+2@gmail.com'
    dispatchEvent(element, 'input', {
      bubbles: true
    })
    raf(function () {
      t.equal(state.value(), 'bvdrucker+2@gmail.com')
      t.equal(state.valid(), true)
      done()
    })
  })
})
