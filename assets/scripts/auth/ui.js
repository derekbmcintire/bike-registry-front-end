'use strict'
const store = require('../store')

// display message on sign up success
const signUpSuccess = function (data) {
  $('#message').text('You signed-up successfully!')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirm').val('')
}

// display message on sign up failure
const signUpFailure = function () {
  $('#message').text('Error on sign-up')
}

// display message on sign in success
// save user data in store
// hide sign in form and show main div
const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Signed in successfully as ' + store.user.email)
  $('.sign-in-up').hide()
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirm').val('')
  $('.main').show()
}

// display message on sign in failure
const signInFailure = function () {
  $('#message').text('Error on sign in')
}

// display message on sign out success
// hide main div and show sign-in/up form
const signOutSuccess = function () {
  $('#message').text('You have signed out successfully')
  $('.main').hide()
  $('.sign-in-up').show()
}

// display message on sign out failure
const signOutFailure = function () {
  $('#message').text('Error signing out')
}

// display message on change password success
// hide change password form
// show main div
const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#change-pw-container').hide()
  $('#old-password').val('')
  $('#new-password').val('')
  $('.main').show()
}

// display a message on change password failure
const changePasswordFailure = function (data) {
  $('#message').text('Error changing password')
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
