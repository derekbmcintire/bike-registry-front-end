'use strict'
const store = require('../store')
const res = require('../result-events/events')
const showBicyclesTemplate = require('../templates/bicycle-listing.handlebars')
const searchBicyclesTemplate = require('../templates/search-results.handlebars')
const authUi = require('../auth/ui')

// display message on create bicycle success
const createBicycleSuccess = function (data) {
  authUi.clearAll()
  $('#message').text('Bike successfully created')
}

// display message on create bicycle failure
const createBicycleFailure = function () {
  $('#message').text('Error creating bike')
}

// display message on get all bicycles success
const getBicyclesSuccess = function (data) {
  store.data = data
  if (store.data.bicycles.length < 1) {
    $('#message').text('You haven\'t created any bikes yet!')
  } else {
    $('#message').text('Showing results')
  }
  const showBicyclesHtml = showBicyclesTemplate({ bicycles: data.bicycles })
  authUi.clearAll()
  $('.display-results').append(showBicyclesHtml)
  res.showUpdateBicycle()
  res.remove()
  res.recover()
  res.showRegisterStolen()
}

// display message on get all bicycles failure
const getBicyclesFailure = function () {
  $('#message').text('Error getting bike')
}

const getStolenBicyclesSuccess = function (data) {
  store.data = data.bicycles.filter((bike) => {
    return bike.stolen === true
  })
  console.log(store.data)
  $('#message').text('Showing results')
  const showBicyclesHtml = showBicyclesTemplate({ bicycles: store.data })
  authUi.clearAll()
  $('.display-results').append(showBicyclesHtml)
  res.showUpdateBicycle()
  res.remove()
  res.recover()
  res.showRegisterStolen()
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
    $('#message').text('Showing results for: ' + store.targetData.join(' '))
    return result
  } else {
    // else if there are no results, return no results found
    $('#message').text('No results found')
  }
}

// display search results
const searchBicyclesSuccess = function (data) {
  store.data = data
  authUi.clearAll()
  $('#search-form').show()
  const showBicyclesHtml = searchBicyclesTemplate(matchBicycle(store.targetData, data.bicycles))
  $('.display-results').append(showBicyclesHtml)
  res.showUpdateBicycle()
  res.remove()
  res.showRegisterStolen()
}

// display message on search failure
const searchBicyclesFailure = function () {
  $('#message').text('Search error')
}

module.exports = {
  createBicycleSuccess,
  createBicycleFailure,
  getBicyclesSuccess,
  getBicyclesFailure,
  searchBicyclesSuccess,
  searchBicyclesFailure,
  getStolenBicyclesSuccess
}
