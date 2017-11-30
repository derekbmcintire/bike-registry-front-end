'use strict'
// const store = require('../store')

const deleteBicycleSuccess = function () {
  console.log('Then I should run because I am a success')
  $('#message').text('Bike successfully deleted')
}

const deleteBicycleFailure = function () {
  console.log('If something goes wrong you will see me!')
  $('#message').text('You don not have permission to delete this bike!')
}

module.exports = {
  deleteBicycleSuccess,
  deleteBicycleFailure
}
