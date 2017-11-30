'use strict'
const config = require('../config')
const store = require('../store')

// create bicycle ajax request
const createBicycle = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/bicycles',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// get all bicycles ajax request
const getBicycles = function () {
  return $.ajax({
    url: config.apiOrigin + '/bicycles',
    method: 'GET',
    headers: 'Content-Type: application/json'
  })
}

// get all bicycles ajax request
const findBicycle = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/bicycles/' + data.bicycle.id,
    method: 'GET'
  })
}

module.exports = {
  createBicycle,
  getBicycles,
  findBicycle
}
