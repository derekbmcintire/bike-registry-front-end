'use strict'
const config = require('../config')
const store = require('../store')
const ui = require('./ui')

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
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// get all bicycles belonging to current user ajax request
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

// update a single bicycle ajax request
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

// create a new stolen event ajax request
const registerStolen = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// get all stolen bicycles ajax request
const getStolenBicycles = function () {
  ui.stolen = true
  return $.ajax({
    url: config.apiOrigin + '/bicycles',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// create a new recovered event ajax request
const registerRecovered = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/events',
    method: 'POST',
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
  getMyBicycles,
  registerStolen,
  getStolenBicycles,
  registerRecovered
}
