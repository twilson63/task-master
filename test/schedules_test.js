var test = require('tap').test
var schedule = require('../schedule')
var compose = require('ramda').compose
var forEach = require('ramda').forEach
var curry = require('ramda').curry
var and = require('ramda').and
var has = require('ramda').has

const validate = curry((t, task) =>
  compose(t.ok, and(has('schedule'),has('name')), 'valid'))

test('All items in schedule should have a name and a schedule', (t) => {
  forEach(validate(t), schedule)
  t.end()
})
