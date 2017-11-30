'use strict'
const config = require('../config')
const store = require('../store')

// create bicycle ajax request
const createBicycle = function (data) {
  console.log(data.bicycle)
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
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// get all bicycles ajax request
const findBicycle = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/bicycles/' + data.bicycle.id,
    method: 'GET'
  })
}

// delete a bicycle ajax request
const deleteBicycle = function () {
  return $.ajax({
    url: config.apiOrigin + '/bicycles/' + store.updateId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// update a single bicycle
const updateBicycle = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/bicycles/' + store.updateId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createBicycle,
  getBicycles,
  findBicycle,
  deleteBicycle,
  updateBicycle
}
