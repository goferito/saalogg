const expect = require('chai').expect

describe('Saalog', () => {

  it('loads', () => {
    require('../index')
  })

  it('logs strings', () => {
    console.log('This', 'is', 'a', 'log')
  })

  it('logs objects', () => {
    console.log({a:1, b: 2, c: {c: 3}})
  })

  it('logs variables', () => {
    let myStr = 'This is dog'
    console.log(myStr)
  })

  it('warns', () => {
    console.warn('This is a warning')
  })

  it('logs errors', () => {
    console.error('This is an error')
  })

})

