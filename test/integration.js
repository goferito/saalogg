const expect = require('chai').expect

describe('Saalog', () => {

  it('loads', () => {
    require('../index')
  })


  describe('On dev environment', () => {

    const nodeEnv = process.env.NODE_ENV

    before(() => {
      process.env.NODE_ENV = ''
    })

    after(() => {
      process.env.NODE_ENV = nodeEnv
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

    it('injects values', () => {
      console.log('This is %s #%f', 'dog', 2)
    })

    it('warns', () => {
      console.warn('This is a warning')
    })

    it('logs errors', () => {
      console.error('This is an error')
    })

  })


  describe('On production environment', () => {
    const nodeEnv = process.env.NODE_ENV

    before(() => {
      process.env.NODE_ENV = 'production'
    })

    after(() => {
      process.env.NODE_ENV = nodeEnv
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

    it('injects values', () => {
      console.log('This is %s #%f', 'dog', 2)
    })

    it('warns', () => {
      console.warn('This is a warning')
    })

    it('logs errors', () => {
      console.error('This is an error')
    })

  })

})

