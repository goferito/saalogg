
// Avoid it to be loaded more than once
if (typeof loaded === 'undefined') {
  const chalk = require('chalk')
  const util = require('util')

  let err = console.error
  let warn = console.warn
  let log = console.log

  // If production env, date is important. If dev, time is enough
  let formatFunc = process.env.NODE_ENV === 'production'
                     ? ['toISOString']
                     : ['toLocaleTimeString']

  console.error = (...msg) => {
    let date = new Date()[formatFunc]().replace(/\s.*/, '')
    err(chalk.red('[' + date + ']'), util.format.apply(this, msg))
  }

  console.warn = (...msg) => {
    let date = new Date()[formatFunc]().replace(/\s.*/, '')
    warn(chalk.yellow('[' + date + ']'), util.format.apply(this, msg))
  }

  console.log = (...msg) => {
    let date = new Date()[formatFunc]().replace(/\s.*/, '')
    log(chalk.blue('[' + date + ']'), util.format.apply(this, msg))
  }

  loaded = true
}
