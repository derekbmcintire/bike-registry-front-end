'use strict'

// const getFormFields = require(`../../lib/get-form-fields`)
const api = require('../bicycles/api')
const store = require('../store')
const ui = require('./ui')

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

module.exports = {
  onDeleteBicycle,
  remove
}
