'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// show the create bike form
const showCreateBicycle = function () {
  $('#create-bicycle-form').show()
  $('#update-bicycle-form').hide()
  $('#find-a-bicycle-form').hide()
  $('#bike-search').val('')
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

// get all my bicycles
const onGetMyBicycles = function () {
  api.getMyBicycles()
    .then(ui.getBicyclesSuccess)
    .catch(ui.getBicyclesFailure)
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
  $('#update-bicycle-form').hide()
  $('.display-results').html('')
  $('#find-a-bicycle-form').show()
}

// search bicycles callback function
const onSearchBicycles = function (event) {
  event.preventDefault()
  store.targetData = $('#bike-search').val().split(' ')
  api.getBicycles(store.targetData)
    .then(ui.searchBicyclesSuccess)
    .catch(ui.searchBicyclesFailure)
}

// click handlers
const addHandlers = function () {
  $('#show-my-bikes').on('click', onGetMyBicycles)
  $('#show-create-form').on('click', showCreateBicycle)
  $('#create-bicycle-form').on('submit', onCreateBicycle)
  $('#show-all-bikes').on('click', onGetBicycles)
  $('#find-a-bicycle-form').on('submit', onSearchBicycles)
  $('#show-find-form').on('click', showFindBicycle)
}

module.exports = {
  addHandlers
}
