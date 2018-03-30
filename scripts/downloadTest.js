var Nightmare = require('nightmare')
require('nightmare-inline-download')(Nightmare)

var username = '103016'
var password = 'epeiff531'
var url = 'https://online.tlleadmanager2.com/MyAccountLogin/'
var urlLeads = String(url) + 'ScannedLeads.aspx'

var nightmare = new Nightmare({ show: false })
nightmare
  .goto(url)
  .type('input#Login', username)
  .type('input#Password', password)
  .click('input.submit[value=" Log In "]')
  .wait('#hplScannedLeads')
  .goto(urlLeads)
  .evaluate(() => {
    var links = document.querySelectorAll('a.PDF')
    var ids = []
    for (var i = 0; i < links.length; i++) {
      ids.push(links[i].getAttribute('href'))
    }
    return ids
  })
  .then(function (ids) {
    return ids.reduce(function (accumulator, id) {
      return accumulator.then(function (results) {
        // nightmare
        //   .click('a[href="' + id + '"]')
        //   .download(username + '/leads/' + id + '.pdf')
        results.push(id)
        return results // ids of downloaded files
      })
    }, Promise.resolve([]))
  })
  .then(function (results) {
    console.log(
      'Downloaded: ' + results.length + ' New Lead Documents',
      results
    )
    return nightmare.end()
  })
  .catch(function (error) {
    console.error('Error:', error)
    return nightmare.end()
  })
