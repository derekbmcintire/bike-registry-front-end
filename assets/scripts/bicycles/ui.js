'use strict'
const store = require('../store')
const showBicyclesTemplate = require('../templates/bicycle-listing.handlebars')

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
  store.data = data
  const showBicyclesHtml = showBicyclesTemplate({ bicycles: data.bicycles })
  $('#create-bicycle-form').hide()
  $('.display-results').append(showBicyclesHtml)
  // $('#clear-bicycles').show()
  // $('#update-bicycles').on('submit', onUpdateBicycle)
  // remove()
  // updateUi()
  // clearNotes()
}

module.exports = {
  createBicycleSuccess,
  createBicycleFailure,
  getBicyclesSuccess
}
