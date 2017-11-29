'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const bicycleEvents = require('./bicycles/events')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  bicycleEvents.addHandlers()
  $('.main').hide()
  $('#change-pw-container').hide()
  $('#create-bicycle-form').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
