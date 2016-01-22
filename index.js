var schedule = require('./schedule')
var crontab = require('node-crontab')
var { map, curry } = require('ramda')

const handler = curry((name, err, result) => {
  if (err) throw err
  console.log({ name: name, date: (new Date()).toISOString()})
})

const scheduleFn = (task) => {
  var t = require(task.name)
  crontab.scheduleJob(task.schedule, t, [handler(task.name)])
  return task
}

map(scheduleFn, schedule)

var http = require('http')
var server = http.createServer((req, res) => res.end('task master...'))
server.listen(process.env.PORT || 3000)
