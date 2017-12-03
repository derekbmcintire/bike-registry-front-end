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

const registerStolen = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getStolenBicycles = function () {
  return $.ajax({
    url: config.apiOrigin + '/bicycles/stolen',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createBicycle,
  getBicycles,
  deleteBicycle,
  updateBicycle,
  getMyBicycles,
  registerStolen,
  getStolenBicycles
}
