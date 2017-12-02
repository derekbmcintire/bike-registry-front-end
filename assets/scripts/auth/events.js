'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// sign up callback function
const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// sign in callback function
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// sign out callback function
const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// show change password form function
const showChangePassword = function () {
  $('#change-pw-container').show()
  $('.main').hide()
  $('#abort-change-pw').on('click', () => {
    $('#message-top').text('')
    $('#old-password').val('')
    $('#new-password').val('')
    $('#change-pw-container').hide()
    $('.main').show()
  })
}

// change password callback function
const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// click handlers
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#show-change-pw').on('click', showChangePassword)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-in')
}

module.exports = {
  addHandlers
}
