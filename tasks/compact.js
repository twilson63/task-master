var compact = require('@twilson63/compact')
var cfups = require('cfups')
var { compose, prop } = require('ramda')

module.exports = (inputs, cb) =>
  compose(
    compact,
    prop('host'),
    cfups('cloudq-' + process.env.NODE_ENV.toLowerCase())
  )(process.env)
    .then((result) => cb(null, result))
    .catch(cb)
