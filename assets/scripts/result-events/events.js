'use strict'

// const getFormFields = require(`../../lib/get-form-fields`)
const api = require('../bicycles/api')
const store = require('../store')
const ui = require('./ui')

// removes a bicycle from the view
const remove = function () {
  console.log('click event added')
  $('.remove').on('click', () => {
    console.log('first I get clicked')
    store.updateId = $(event.target).parent().parent().data('id')
    console.log('then I store this: ' + store.updateId)
    onDeleteBicycle()
    $(event.target).parent().parent().hide()
  })
}

// deletes a bicycle from the database
const onDeleteBicycle = function () {
  console.log('then I call the API')
  api.deleteBicycle()
    .then(ui.deleteBicycleSuccess)
    .catch(ui.deleteBicycleFailure)
}

module.exports = {
  onDeleteBicycle,
  remove
}
