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

const getMyBicycles = function () {
  return $.ajax({
    url: config.apiOrigin + '/bicycles/mine',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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
  deleteBicycle,
  updateBicycle,
  getMyBicycles
}
