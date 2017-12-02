'use strict'
const store = require('../store')

// clear sign up forms
const clearSignUp = function () {
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirm').val('')
}

// clear sign in fields, hide sign in/up forms and show main div
const clearSignIn = function () {
  $('.sign-in-up').hide()
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirm').val('')
  $('.main').show()
}

// clear create bicycle fields and forms
const clearCreateBicycle = function () {
  $('#bicycle-make').val('')
  $('#bicycle-model').val('')
  $('#bicycle-color').val('')
  $('#serial-number').val('')
  $('#bicycle-size').val('')
  $('#bicycle-url').val('')
  $('#create-bicycle-form').hide()
}

// clear update bicycle fields and forms
const clearUpdateBicycle = function () {
  $('#update-make').val('')
  $('#update-model').val('')
  $('#update-color').val('')
  $('#update-number').val('')
  $('#update-size').val('')
  $('#update-url').val('')
  $('#update-bicycle-form').hide()
}

// clear all forms and results
const clearAll = function () {
  clearCreateBicycle()
  clearUpdateBicycle()
  $('#search-form').hide()
  $('.display-results').html('')
  $('#bike-search').val('')
}

// display message on sign up success
const signUpSuccess = function (data) {
  $('#sign-message').text('You signed-up successfully!')
  clearSignUp()
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
  clearSignIn()
}

// display message on sign in failure
const signInFailure = function () {
  $('#sign-message').text('Error on sign in')
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
