# task-master -> cf scheduled functions

Schedule a time to invoke a task that is wrapped in a npm module:

# Step 1 - create your function and wrap it in an npm module
# Step 2 - publish your module
# Step 3 - checkout this repository and add your module
# Step 4 - open the schedule.json file and add
   - module name
   - invoke schedule (CRON Schedule)

# Step 5 - check in the modifications and submit a pull request for review

# What should the module.exports for a schedule function look like?

- inputs (Array)
- callback (Function)

```
module.exports = (inputs, cb) => cb(null, true)
```

The module exports should always provide a callback function as the last parameter.

You can access any env variables or user-provided service variables from the
`process.env` method in your scheduled function.

This service will show the last 100 tasks that ran and any output returned by
the callback if successful, if an error is return the app will log the error and
exit.

** Remember to setup your user-provided services or env variables in the appropriate
ci branch in strider.
