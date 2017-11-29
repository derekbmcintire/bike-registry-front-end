'use strict'
// const store = require('../store')

// display message on create bicycle success
const createBicycleSuccess = function () {
  $('#message').text('Bicycle successfully created')
}

// display message on create bicycle failure
const createBicycleFailure = function () {
  $('#message').text('Error creating bicycle')
}

module.exports = {
  createBicycleSuccess,
  createBicycleFailure
}
