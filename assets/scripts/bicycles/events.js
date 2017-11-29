'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// show the create bike form
const showCreateBike = function () {
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

// click handlers
const addHandlers = function () {
  $('#show-create-form').on('click', showCreateBike)
  $('#create-bicycle-form').on('submit', onCreateBicycle)
}

module.exports = {
  addHandlers
}
