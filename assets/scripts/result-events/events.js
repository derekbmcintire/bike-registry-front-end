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
    $('#update-url').val(store.data.bicycles.find((element) => {
      return element.id === store.updateId
    }).url)
    $('#update-make').val(store.data.bicycles.find((element) => {
      return element.id === store.updateId
    }).make)
    $('#update-model').val(store.data.bicycles.find((element) => {
      return element.id === store.updateId
    }).model)
    $('#update-color').val(store.data.bicycles.find((element) => {
      return element.id === store.updateId
    }).color)
    $('#update-number').val(store.data.bicycles.find((element) => {
      return element.id === store.updateId
    }).serial_number)
    $('#update-size').val(store.data.bicycles.find((element) => {
      return element.id === store.updateId
    }).size)
    $('#update-bicycle-form').show()
    $('#update-bicycle-form').on('submit', onUpdateBicycle)
  })
}

module.exports = {
  onDeleteBicycle,
  remove,
  onUpdateBicycle,
  showUpdateBicycle
}
