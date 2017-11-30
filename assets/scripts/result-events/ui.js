'use strict'
// const store = require('../store')

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
  $('#message').text('Error updating bicycle')
}

module.exports = {
  deleteBicycleSuccess,
  deleteBicycleFailure,
  updateBicycleSuccess,
  updateBicycleFailure
}
