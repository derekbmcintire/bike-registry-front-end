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

module.exports = {

  createBicycle
}
