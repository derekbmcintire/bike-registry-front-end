'use strict'

// display message for delete bicycle success
const deleteBicycleSuccess = function () {
  $('#message').text('Bike successfully deleted')
}

// display message for delete bicycle failure
const deleteBicycleFailure = function () {
  $('#message').text('You don not have permission to delete this bike!')
}

// display message for update bicycle success
const updateBicycleSuccess = function () {
  $('#message').text('Bicycle successfully updated')
}

// display message for update bicycle failure
const updateBicycleFailure = function () {
  $('#message').text('Error updating bike')
}

const registerStolenSuccess = function () {
  $('#register-form').off('submit')
  $('.register-stolen').off('click')
  $('#event-location').val('')
  $('#message').text('Bike registered as stolen')
}

const registerStolenFailure = function () {
  $('#message').text('Error on bike registration')
}

const recoverStolenSuccess = function () {
  $('#recover-form').off('submit')
  $('.recover').off('click')
  $('#r_event-location').val('')
  $('#message').text('Bicycle status recovered!')
}

const recoverStolenFailure = function () {
  $('#message').text('Error updating bicycle status')
}

module.exports = {
  deleteBicycleSuccess,
  deleteBicycleFailure,
  updateBicycleSuccess,
  updateBicycleFailure,
  registerStolenSuccess,
  registerStolenFailure,
  recoverStolenSuccess,
  recoverStolenFailure
}
