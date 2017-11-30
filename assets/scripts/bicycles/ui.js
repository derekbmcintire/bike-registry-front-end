'use strict'
const store = require('../store')
const showBicyclesTemplate = require('../templates/bicycle-listing.handlebars')
const showBicycleTemplate = require('../templates/find-bicycle.handlebars')

// display message on create bicycle success
const createBicycleSuccess = function () {
  $('#message').text('Bicycle successfully created')
}

// display message on create bicycle failure
const createBicycleFailure = function () {
  $('#message').text('Error creating bicycle')
}

// display message on get all bicycles success
const getBicyclesSuccess = function (data) {
  $('#message').text('Get bicycles success!')
  store.data = data
  const showBicyclesHtml = showBicyclesTemplate({ bicycles: data.bicycles })
  $('.display-results').html('')
  $('#create-bicycle-form').hide()
  $('#find-a-bicycle-form').hide()
  $('.display-results').append(showBicyclesHtml)
}

// display message on get all bicycles failure
const getBicyclesFailure = function () {
  $('#message').text('Error getting bicycles')
}

// display message on get all bicycles success
const findBicycleSuccess = function (data) {
  $('#message').text('Found bicycle success!')
  store.data = data
  const showBicycleHtml = showBicycleTemplate({ bicycle: data.bicycle })
  $('.display-results').append(showBicycleHtml)
  $('#find-a-bicycle-form').hide()
}

// display message on get all bicycles failure
const findBicycleFailure = function () {
  $('#message').text('Error finding bicycle')
}

module.exports = {
  createBicycleSuccess,
  createBicycleFailure,
  getBicyclesSuccess,
  getBicyclesFailure,
  findBicycleSuccess,
  findBicycleFailure
}
