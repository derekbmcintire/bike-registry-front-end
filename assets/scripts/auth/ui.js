'use strict'
const store = require('../store')

// display message on sign up success
const signUpSuccess = function (data) {
  $('#sign-message').text('You signed-up successfully!')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirm').val('')
}

// display message on sign up failure
const signUpFailure = function () {
  $('#sign-message').text('Error on sign-up')
}

// display message on sign in success
// save user data in store
// hide sign in form and show main div
const signInSuccess = function (data) {
  store.user = data.user
  $('#display-email').text(store.user.email)
  $('#message').text('Signed in successfull')
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
  $('#sign-message').text('Error on sign in')
}

// clear all forms and results
const clearAll = function () {
  $('#bicycle-make').val('')
  $('#bicycle-model').val('')
  $('#bicycle-color').val('')
  $('#serial-number').val('')
  $('#bicycle-size').val('')
  $('#bicycle-url').val('')
  $('#update-make').val('')
  $('#update-model').val('')
  $('#update-color').val('')
  $('#update-number').val('')
  $('#update-size').val('')
  $('#update-url').val('')
  $('#create-bicycle-form').hide()
  $('.display-results').html('')
  $('#create-bicycle-form').hide()
  $('#find-a-bicycle-form').hide()
  $('#update-bicycle-form').hide()
  $('#bike-search').val('')
}

// display message on sign out success
// hide main div and show sign-in/up form
const signOutSuccess = function () {
  $('#message').text('You have signed out successfully')
  clearAll()
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
  changePasswordFailure,
  clearAll
}
