'use strict'
const store = require('../store')
const res = require('../result-events/events')
const showBicyclesTemplate = require('../templates/bicycle-listing.handlebars')
const searchBicyclesTemplate = require('../templates/search-results.handlebars')

// display message on create bicycle success
const createBicycleSuccess = function (data) {
  console.log(data.bicycle)
  $('#message').text('Bicycle successfully created')
}

// display message on create bicycle failure
const createBicycleFailure = function () {
  $('#message').text('Error creating bicycle')
}

// display message on get all bicycles success
const getBicyclesSuccess = function (data) {
  $('#message').text('Get bicycles success!')
  store.data = data
  console.log(store.user)
  const showBicyclesHtml = showBicyclesTemplate({ bicycles: data.bicycles })
  $('.display-results').html('')
  $('#create-bicycle-form').hide()
  $('#find-a-bicycle-form').hide()
  $('#update-bicycle-form').hide()
  $('.display-results').append(showBicyclesHtml)
  res.showUpdateBicycle()
  res.remove()
}

// display message on get all bicycles failure
const getBicyclesFailure = function () {
  $('#message').text('Error getting bicycles')
}

// display message on get all bicycles success
// const findBicycleSuccess = function (data) {
//   $('#message').text('Found bicycle success!')
//   store.data = data
//   const showBicycleHtml = showBicycleTemplate({ bicycle: data.bicycle })
//   $('.display-results').append(showBicycleHtml)
//   $('#find-a-bicycle-form').hide()
// }

// display message on get all bicycles failure
// const findBicycleFailure = function () {
//   $('#message').text('Error finding bicycle')
// }

const matchBicycle = function (search, result) {
  // const attrs = [search.make, search.model, search.color, search.serial_number, search.size]
  const matches = []
  for (let i = 0; i < result.length; i++) {
    if (result[i].make === search.make) {
      matches.push(result[i])
    } else if (result[i].model === search.model) {
      matches.push(result[i])
    } else if (result[i].color === search.color) {
      matches.push(result[i])
    } else if (result[i].serial_number === search.serial_number) {
      matches.push(result[i])
    } else if (result[i].size === search.size) {
      matches.push(result[i])
    }
  }
  return matches
}

const searchBicyclesSuccess = function (data) {
  $('.display-results').html('')
  const showBicyclesHtml = searchBicyclesTemplate(matchBicycle(store.targetData.bicycle, data.bicycles))
  $('.display-results').append(showBicyclesHtml)
  console.log(matchBicycle(store.targetData.bicycle, data.bicycles))
}

const searchBicyclesFailure = function () {
  $('#message').text('Error finding bicycle')
}

module.exports = {
  createBicycleSuccess,
  createBicycleFailure,
  getBicyclesSuccess,
  getBicyclesFailure,
  // findBicycleSuccess,
  // findBicycleFailure
  searchBicyclesSuccess,
  searchBicyclesFailure
}
