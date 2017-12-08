'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const bicycleEvents = require('./bicycles/events')
const signInUp = require('./templates/sign-in-up.handlebars')

$(() => {
  setAPIOrigin(location, config)
  $('.sign-in-up').append(signInUp)
  $('#sign-in-btn').on('click', authEvents.showLoader)
  authEvents.addHandlers()
  bicycleEvents.addHandlers()
  $('.main').hide()
  $('#change-pw-container').hide()
  $('#create-bicycle-form').hide()
  $('#update-bicycle-form').hide()
  $('#register-form').hide()
  $('#recover-form').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
