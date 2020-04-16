
Object.assign(module.exports, {
  addLogger,
})


// Avoid it to be loaded more than once
if (console.__saalogg_loaded === undefined) {
  const chalk = require('chalk')
  const util = require('util')

  const err  = console.error
  const warn = console.warn
  const log  = console.log

  function printMsg (logFn, msg, color) {

    const now = new Date()
    const time = now.toTimeString().replace(/ .*/, '')

    // If production env, date is important. If dev, time is enough
    const formattedDate = process.env.NODE_ENV === 'production'
      ? `${now.getDate()}/${now.getMonth() + 1} ${time}`
      : time

    logFn(
      chalk[color](`[${formattedDate}]`),
      util.format.apply(this, msg)
    )
  }

  console.log   = (...msg) => printMsg(log , msg, 'blue')
  console.warn  = (...msg) => printMsg(warn, msg, 'yellow')
  console.error = (...msg) => printMsg(err , msg, 'red')

  console.__saalogg_loaded = true
  console.__loggers = []
}


function addLogger ({ loggerId, logLevels, fn }) {

  // Avoid adding the same logger twice
  if (loggerId && console.__loggers.includes(loggerId)) {
    console.warn("Attempt to add same logger twice\n", new Error().stack)
    return
  }
  console.__loggers.push(loggerId)

  logLevels.forEach((level) => {
    if (!console[level]) throw new Error(`No valid log level ${level}`)

    const tmp = console[level]
    console[level] = (...msg) => {
      tmp.apply(this, msg)
      fn.apply(this, msg)
    }
  })
}

