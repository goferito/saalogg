
// Avoid it to be loaded more than once
if (typeof loaded === 'undefined') {
  const chalk = require('chalk')
  const util = require('util')

  const err  = console.error
  const warn = console.warn
  const log  = console.log

  function printMsg (logFn, msg, color) {

    // Since I'm Spanish, I find the Spanish formatting
    // the most clear one
    const now = new Date().toLocaleString('es')

    // If production env, date is important. If dev, time is enough
    const formattedDate = process.env.NODE_ENV === 'production'
                            ? now.replace(/\/[0-9]{4}/, '')
                            : now.replace(/.* /, '')
    logFn(
      chalk[color](`[${formattedDate}]`),
      util.format.apply(this, msg)
    )
  }

  console.log   = (...msg) => printMsg(log , msg, 'blue')
  console.warn  = (...msg) => printMsg(warn, msg, 'yellow')
  console.error = (...msg) => printMsg(err , msg, 'red')

  loaded = true
}

