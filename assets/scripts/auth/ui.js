'use strict'
const store = require('../store')
const clear = require('./clears')
const bicycles = require('../bicycles/events')

// display message on sign up success
const signUpSuccess = function (data) {
  clear.clearAll()
  $('.loader-container').remove()
  clear.clearSignUp()
  $('#sign-message').text('You signed-up successfully!')
  switchSignIn()
  $('.loader-container').remove()
}

// display message on sign up failure
const signUpFailure = function () {
  clear.clearAll()
  $('.loader-container').remove()
  $('#sign-message').text('Please enter a valid email address and matching passwords')
  $('.loader-container').remove()
}

// display message on sign in success
// save user data in store
// hide sign in form and show main div
const signInSuccess = function (data) {
  $('.loader-container').remove()
  store.user = data.user
  $('#display-email').text(store.user.email)
  $('#message-top').text('')
  $('#message').text('You have signed in successfully')
  clear.clearSignIn()
  bicycles.onGetBicycles()
}

// display message on sign in failure
const signInFailure = function () {
  clear.clearAll()
  $('.loader-container').remove()
  $('#sign-message').text('Error on sign in')
}

// display message on sign out success
// hide main div and show sign-in/up form
const signOutSuccess = function () {
  clear.clearAll()
  $('#message-top').text('You have signed out successfully')
  $('.main').hide()
  $('.sign-in-up').show()
}

// display message on sign out failure
const signOutFailure = function () {
  clear.clearAll()
  $('#message').text('Error signing out')
}

// display message on change password success
// hide change password form
// show main div
const changePasswordSuccess = function (data) {
  clear.clearAll()
  $('#message').text('Changed password successfully')
  $('#change-pw-container').hide()
  $('#old-password').val('')
  $('#new-password').val('')
  $('.main').show()
}

// display a message on change password failure
const changePasswordFailure = function (data) {
  $('#message-top').text('Password not changed')
  setTimeout(() => {
    $('#message-top').text('')
  }, 1500)
}

const switchSignIn = function () {
  $('#subtitle').text('A community based resource for getting your bike back.')
  $('#sign-message').text('')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirm').val('')
  $('#sign-up-wrap').hide()
  $('#sign-in-wrap').show()
  $('#switch-to-sign-in').off()
  $('#switch-to-sign-up').on('click', switchSignUp)
}

const switchSignUp = function () {
  $('#subtitle').text('A community based resource for getting your bike back.')
  $('#sign-message').text('')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  $('#sign-in-wrap').hide()
  $('#sign-up-wrap').show()
  $('#switch-to-sign-in').on('click', switchSignIn)
  $('#switch-to-sign-up').off()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  switchSignUp
}
