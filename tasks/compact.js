var compact = require('compact')
var cfups = require('cfups')
var { compose, prop } = require('ramda')

module.exports = (cb) =>
  compose(
    compact
    prop('host'),
    cfups('cloudq-' + process.env.NODE_ENV.toLowerCase())
  )(process.env)
    .then((result) => cb(null, result))
    .catch(cb)
