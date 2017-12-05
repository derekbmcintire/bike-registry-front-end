'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('../bicycles/api')
const store = require('../store')
const ui = require('./ui')
const authUi = require('../auth/ui')

// removes a bicycle from the view
const remove = function () {
  $('.remove').on('click', () => {
    store.updateId = $(event.target).parent().parent().data('id')
    onDeleteBicycle()
    $(event.target).parent().parent().hide()
  })
}

// deletes a bicycle from the database
const onDeleteBicycle = function () {
  api.deleteBicycle()
    .then(ui.deleteBicycleSuccess)
    .catch(ui.deleteBicycleFailure)
}

// update bicycle in database
const onUpdateBicycle = function () {
  event.preventDefault()
  $('#update-bicycle-form').hide()
  const data = getFormFields(event.target)
  api.updateBicycle(data)
    .then(ui.updateBicycleSuccess)
    .catch(ui.updateBicycleFailure)
}

// show the update bike form
const showUpdateBicycle = function () {
  $('.show-update-form').on('click', () => {
    authUi.clearAll()
    store.updateId = $(event.target).parent().parent().data('id')
    // looks through the stored bicycles and returns the current bicycle
    const findCurrentBike = function () {
      return store.data.bicycles.find((bike) => {
        return bike.id === store.updateId
      })
    }
    // sets default value of form fields to the bicycles values
    $('#update-make').val(findCurrentBike().make)
    $('#update-model').val(findCurrentBike().model)
    $('#update-color').val(findCurrentBike().color)
    $('#update-number').val(findCurrentBike().serial_number)
    $('#update-size').val(findCurrentBike().size)
    $('#update-url').val(findCurrentBike().url)
    $('#update-bicycle-form').show()
    $('#update-bicycle-form').on('submit', onUpdateBicycle)
  })
}

// register a recovered event
const onRegisterRecovered = function () {
  event.preventDefault()
  $('#recover-form').hide()
  const data = getFormFields(event.target)
  api.registerRecovered(data)
    .then(ui.registerRecoveredSuccess)
    .catch(ui.registerRecoveredFailure)
}

// show the form to register a recovered event
const showRegisterRecovered = function () {
  $('.recover').on('click', () => {
    authUi.clearAll()
    store.updateId = $(event.target).parent().parent().data('id')
    $('#r_bike_id').val(store.updateId)
    $('#recover-form').show()
    $('#recover-form').on('submit', onRegisterRecovered)
  })
}

// register a stolen event
const onRegisterStolen = function () {
  event.preventDefault()
  $('#register-form').hide()
  const data = getFormFields(event.target)
  api.registerStolen(data)
    .then(ui.registerStolenSuccess)
    .catch(ui.registerStolenFailure)
}

// show the form to register a stolen event
const showRegisterStolen = function () {
  $('.register-stolen').on('click', () => {
    authUi.clearAll()
    store.updateId = $(event.target).parent().parent().data('id')
    $('#bike_id').val(store.updateId)
    $('#register-form').show()
    $('#register-form').on('submit', onRegisterStolen)
  })
}

module.exports = {
  onDeleteBicycle,
  remove,
  onUpdateBicycle,
  showUpdateBicycle,
  showRegisterStolen,
  showRegisterRecovered
}
