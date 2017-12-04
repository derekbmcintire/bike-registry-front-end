'use strict'
const authUi = require('../auth/ui')

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
  $('#message').text('Bike registered as stolen')
}

const registerStolenFailure = function () {
  $('#message').text('Error on bike registration')
}

const recoverBicycleSuccess = function () {
  authUi.clearAll()
  $('#message').text('Bicycle status recovered!')
}

const recoverBicycleFailure = function () {
  $('#message').text('Error updating bicycle status')
}

module.exports = {
  deleteBicycleSuccess,
  deleteBicycleFailure,
  updateBicycleSuccess,
  updateBicycleFailure,
  registerStolenSuccess,
  registerStolenFailure,
  recoverBicycleSuccess,
  recoverBicycleFailure
}
