var Nightmare = require('nightmare')
require('nightmare-download-manager')(Nightmare)
var vo = require('vo')

var username = '103016'
var password = 'epeiff531'
var url = 'https://online.tlleadmanager2.com/MyAccountLogin/'
var urlLeads = String(url) + 'ScannedLeads.aspx'

function getFormattedTime () {
  var today = new Date()
  var y = today.getFullYear()
  var m = today.getMonth()
  var d = today.getDate()
  var h = today.getHours()
  var min = today.getMinutes()
  var s = today.getSeconds()
  return m + '-' + d + '-' + y + '_' + h + '-' + min + '-' + s
}

var date = getFormattedTime()

var results = []
var hrefs = {}
// var geturls = function () {
//   var results = []
//   var hrefs = {}
//   var list = document.querySelectorAll('a.PDF')
//   list.forEach(function (item) {
//     results.push(item.getAttribute('href'))
//   })
//   results.forEach(function (link) {
//     hrefs[link] = false
//   })
//   return [hrefs, results]
// }

var geturls =       (results, hrefs) => {
  var list = document.querySelectorAll('a.PDF')
  list.forEach(function (item) {
    results.push(item.getAttribute('href'))
  })
  results.forEach(function (link) {
    hrefs[link] = false
  })
  return [hrefs, results]
},
function (results) {
  console.log(results)
},
results,
hrefs

function * run () {
  var nightmare = new Nightmare({ show: false })

  nightmare.on('download', (state, downloadItem) => {
    if (state === 'started') {
      nightmare.emit(
        'download',
        username + '/leads/' + date + '.pdf',
        downloadItem
      )
    }
  })

  yield nightmare
    .goto(url)
    .type('input#Login', username)
    .type('input#Password', password)
    .click('input.submit[value=" Log In "]')
    .wait('#hplScannedLeads')
    .goto(urlLeads)
    .evaluate(
      (results, hrefs) => {
        var list = document.querySelectorAll('a.PDF')
        list.forEach(function (item) {
          results.push(item.getAttribute('href'))
        })
        results.forEach(function (link) {
          hrefs[link] = false
        })
        return [hrefs, results]
      },
      function (results) {
        console.log(results)
      },
      results,
      hrefs
    )
    .then(results => {
      console.log('Logged In')
      return results
    })

  for (var i = 0; i < results.length; i++) {
    yield nightmare
      .downloadManager()
      .click('a[href="' + results[i] + '"]')
      .waitDownloadsComplete()
      .then(() => {
        console.log('Downloaded: ' + results[i])
      })
    hrefs[results[i]] = true
  }
  // yield nightmare.evaluate(geturls).then(function (list) {
  //   // for each in list .click('a[href='+list+']')
  //   console.log(list)
  // })

  yield nightmare.end()
}

vo(run)(function (err, result) {
  if (err) {
    console.error('an error occurred: ' + err)
  }
})
