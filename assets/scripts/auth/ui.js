'use strict'
const store = require('../store')
const clear = require('./clears')
const bicycles = require('../bicycles/events')

// display message on sign up success
const signUpSuccess = function (data) {
  clear.clearAll()
  $('.loader-container').remove()
  $('#sign-message').text('You signed-up successfully!')
  clear.clearSignUp()
}

// display message on sign up failure
const signUpFailure = function () {
  clear.clearAll()
  $('.loader-container').remove()
  $('#sign-message').text('Error on sign-up')
}

// display message on sign in success
// save user data in store
// hide sign in form and show main div
const signInSuccess = function (data) {
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
