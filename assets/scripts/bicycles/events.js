'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// show the create bike form
const showCreateBicycle = function () {
  $('#create-bicycle-form').show()
  $('.display-results').html('')
}

// create bicycle callback function
const onCreateBicycle = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createBicycle(data)
    .then(ui.createBicycleSuccess)
    .catch(ui.createBicycleFailure)
}

// get all bicycles callback function
const onGetBicycles = function () {
  api.getBicycles()
    .then(ui.getBicyclesSuccess)
    .catch(ui.getBicyclesFailure)
}

// show the find-a-bike form
const showFindBicycle = function () {
  $('#create-bicycle-form').hide()
  $('.display-results').html('')
  $('#find-a-bicycle-form').show()
}

// create bicycle callback function
const onFindBicycle = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.findBicycle(data)
    .then(ui.findBicycleSuccess)
    .catch(ui.findBicycleSuccess)
}

// click handlers
const addHandlers = function () {
  $('#show-create-form').on('click', showCreateBicycle)
  $('#create-bicycle-form').on('submit', onCreateBicycle)
  $('#show-all-bikes').on('click', onGetBicycles)
  $('#show-find-form').on('click', showFindBicycle)
  $('#find-a-bicycle-form').on('submit', onFindBicycle)
}

module.exports = {
  addHandlers
}
