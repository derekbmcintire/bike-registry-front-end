'use strict'
const store = require('../store')
const res = require('../result-events/events')
const showBicyclesTemplate = require('../templates/bicycle-listing.handlebars')
const searchBicyclesTemplate = require('../templates/search-results.handlebars')
const authUi = require('../auth/ui')

// display message on create bicycle success
const createBicycleSuccess = function (data) {
  authUi.clearAll()
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
  authUi.clearAll()
  $('.display-results').append(showBicyclesHtml)
  res.showUpdateBicycle()
  res.remove()
}

// display message on get all bicycles failure
const getBicyclesFailure = function () {
  $('#message').text('Error getting bicycles')
}

// search all bicycles for search parameters
// takes an array of search parameters and an array of all bicycles in db
const matchBicycle = function (arr, bikes) {
  // creates new array of normalized search parameters
  const search = arr.map((x) => x.toLowerCase())
  let result = []
  // filter through the array of bicycles
  result = bikes.filter(bike => {
    const matches = []
    // for each bicycle check the values it holds against the search parameters
    Object.values(bike).forEach(value => {
      // normalize the current value to lower case
      const curVal = String(value).toLowerCase()
      // if the current value is present in the search parameters array
      if (search.indexOf(curVal) > -1) {
        // push it into the matches array
        matches.push(curVal)
      }
    })
    // if the matches array is the same length as the search parameters array
    // then all search terms are present and the current bicycle object
    // is a match, so it gets returned in the new filter array
    return matches.length === arr.length
  })
  // if there are results in the result array, return success
  if (result.length > 0) {
    $('#message').text('Search success!')
    return result
  } else {
    // else if there are no results, return no results found
    $('#message').text('No results found')
  }
}

// display search results
const searchBicyclesSuccess = function (data) {
  authUi.clearAll()
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
  searchBicyclesSuccess,
  searchBicyclesFailure
}
