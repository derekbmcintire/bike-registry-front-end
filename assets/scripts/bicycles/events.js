'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const clear = require('../auth/clears')

// show the create bike form
const showCreateBicycle = function () {
  clear.clearAll()
  $('#message').text('')
  $('#create-bicycle-form').show()
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
    .then(ui.getMyBicyclesSuccess)
    .catch(ui.getBicyclesFailure)
}

// get all bicycles callback function
const onGetBicycles = function () {
  api.getBicycles()
    .then(ui.getBicyclesSuccess)
    .catch(ui.getBicyclesFailure)
}

// show the search form
const showFindBicycle = function () {
  clear.clearAll()
  $('#search-form').show()
}

// search bicycles callback function
const onSearchBicycles = function (event) {
  event.preventDefault()
  store.targetData = $('#bike-search').val().split(' ')
  api.getBicycles(store.targetData)
    .then(ui.searchBicyclesSuccess)
    .catch(ui.searchBicyclesFailure)
}

const onGetStolenBicycles = function () {
  api.getBicycles()
    .then(ui.getStolenBicyclesSuccess)
    .catch(ui.getBicyclesFailure)
}

// click handlers
const addHandlers = function () {
  $('#show-my-bikes').on('click', onGetMyBicycles)
  $('#show-create-form').on('click', showCreateBicycle)
  $('#create-bicycle-form').on('submit', onCreateBicycle)
  $('#show-all-bikes').on('click', onGetBicycles)
  $('#search-form').on('submit', onSearchBicycles)
  $('#show-find-form').on('click', showFindBicycle)
  $('#show-stolen-bikes').on('click', onGetStolenBicycles)
}

module.exports = {
  addHandlers,
  onGetBicycles
}
