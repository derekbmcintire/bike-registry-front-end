'use strict'
const store = require('../store')
const res = require('../result-events/events')
const showBicyclesTemplate = require('../templates/bicycle-listing.handlebars')
const searchBicyclesTemplate = require('../templates/search-results.handlebars')

// display message on create bicycle success
const createBicycleSuccess = function (data) {
  $('#bicycle-make').val('')
  $('#bicycle-model').val('')
  $('#bicycle-color').val('')
  $('#serial-number').val('')
  $('#bicycle-size').val('')
  $('#bicycle-url').val('')
  $('#create-bicycle-form').hide()
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
  const showBicyclesHtml = showBicyclesTemplate({ bicycles: data.bicycles })
  $('.display-results').html('')
  $('#create-bicycle-form').hide()
  $('#find-a-bicycle-form').hide()
  $('#update-bicycle-form').hide()
  $('#bike-search').val('')
  $('.display-results').append(showBicyclesHtml)
  res.showUpdateBicycle()
  res.remove()
}

// display message on get all bicycles failure
const getBicyclesFailure = function () {
  $('#message').text('Error getting bicycles')
}

const matchBicycle = function (arr, bikes) {
  const search = arr.map((x) => x.toLowerCase())
  let result = []
  result = bikes.filter(bike => {
    const matches = []
    Object.values(bike).forEach(value => {
      const curVal = String(value).toLowerCase()
      console.log(curVal)
      if (search.indexOf(curVal) > -1) {
        matches.push(curVal)
      }
    })
    return matches.length === arr.length
  })
  if (result.length > 0) {
    $('#message').text('Search success!')
    return result
  } else {
    $('#message').text('No results found')
  }
}

// display search results
const searchBicyclesSuccess = function (data) {
  $('.display-results').html('')
  const showBicyclesHtml = searchBicyclesTemplate(matchBicycle(store.targetData, data.bicycles))
  $('.display-results').append(showBicyclesHtml)
  res.showUpdateBicycle()
  res.remove()
}

// display message on search failure
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
