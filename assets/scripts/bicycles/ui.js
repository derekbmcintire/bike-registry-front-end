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

// const getMyBicyclesSuccess = function (data) {
//
// }
//
// const getMyBicyclesFailure = function () {
//
// }

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

// finds search results
// takes an array of strings that the user types into the  search bar
// and an array of all the bikes that were returned from the index action
const matchBicycle = function (arr, bikes) {
  // loop through the array of search words
  for (let i = 0; i < arr.length; i++) {
    // filter the bikes array to only return objects that contain search words
    return bikes.filter((bike) => {
      // turn bicycle object values into an array of strings
      // map through that array and coerce each value to a string
      // normalize each value to lowercase
      // check the array for the current search word
      // if it exists, return the whole object
      return Object.values(bike).map((value) => {
        return String(value).toLowerCase()
      }).indexOf(arr[i].toLowerCase()) > -1
    })
  }
}

// display search results
const searchBicyclesSuccess = function (data) {
  $('.display-results').html('')
  const showBicyclesHtml = searchBicyclesTemplate(matchBicycle(store.targetData, data.bicycles))
  $('.display-results').append(showBicyclesHtml)
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
