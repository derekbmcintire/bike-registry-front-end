'use strict'
// const authUi = require('../auth/ui')

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

// display message for register bicycle stolen success
const registerStolenSuccess = function () {
  $('#register-form').off('submit')
  $('.register-stolen').off('click')
  $('#event-location').val('')
  $('#message').text('Bike registered as stolen')
}

// display message for register bicycle stolen failure
const registerStolenFailure = function () {
  $('#message').text('Error on bike registration')
}

// display message for register bicycle recovered success
const registerRecoveredSuccess = function () {
  $('#recover-form').off('submit')
  $('.recover').off('click')
  $('#r_event-location').val('')
  $('#message').text('Bike registered as recovered')
}

// display message for register bicycle recovered failure
const registerRecoveredFailure = function () {
  $('#message').text('Error on bike registration')
}

module.exports = {
  deleteBicycleSuccess,
  deleteBicycleFailure,
  updateBicycleSuccess,
  updateBicycleFailure,
  registerStolenSuccess,
  registerStolenFailure,
  registerRecoveredSuccess,
  registerRecoveredFailure
}
