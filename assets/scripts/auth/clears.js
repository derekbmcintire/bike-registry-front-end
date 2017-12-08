'use strict'

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
  $('.display-results').html('')
  $('#bike-search').val('')
  $('#register-form').hide()
  $('#recover-form').hide()
  $('.message').html('')
}

module.exports = {
  clearAll,
  clearSignIn,
  clearSignUp
}
