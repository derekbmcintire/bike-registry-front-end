'use strict'
// const store = require('../store')

const deleteBicycleSuccess = function () {
  $('#message').text('Bike successfully deleted')
}

const deleteBicycleFailure = function () {
  $('#message').text('You don not have permission to delete this bike!')
}

module.exports = {
  deleteBicycleSuccess,
  deleteBicycleFailure
}
