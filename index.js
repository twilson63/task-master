var schedule = require('./schedule')
var crontab = require('node-crontab')
var { forEach, curry } = require('ramda')

// handle task complete event
const handler = curry((name, err, result) => {
  // if error shutdown
  if (err) throw err
  console.log({ name: name, date: (new Date()).toISOString()})
})

const scheduleFn = task => {
  var t = require(task.name)
  crontab.scheduleJob(task.schedule, t, [handler(task.name)])
}

// register schedules
forEach(scheduleFn, schedule)

// setup web server
var http = require('http')
var server = http.createServer((req, res) => res.end('task master...'))
server.listen(process.env.PORT || 3000)
