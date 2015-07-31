'use strict'

var test = require('tape')
var document = require('global/document')
var vdom = require('virtual-dom')
var Loop = require('main-loop')
var raf = require('raf')
var Delegator = require('dom-delegator')
var dispatchEvent = require('dispatch-event')
var EmailInput = require('./')

test(function (t) {
  Delegator()
  var input = EmailInput()
  var loop = Loop(input(), EmailInput.render, vdom)
  var element = loop.target

  document.body.appendChild(loop.target)
  input(loop.update)

  test('state to dom', function (t) {
    t.plan(1)
    input.value.set('bvdrucker+1@gmail.com')
    raf(function () {
      t.equal(element.value, 'bvdrucker+1@gmail.com')
    })
  })

  test('dom to state', function (t) {
    t.plan(2)
    element.value = 'bvdrucker+2@gmail.com'
    dispatchEvent(element, 'input', {
      bubbles: true
    })
    raf(function () {
      t.equal(input.value(), 'bvdrucker+2@gmail.com')
      t.equal(input.valid(), true)
    })
  })

  t.end()
})
