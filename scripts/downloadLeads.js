var Nightmare = require('nightmare')
require('nightmare-download-manager')(Nightmare)

var nightmare = new Nightmare({ show: false })

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

nightmare.on('download', (state, downloadItem) => {
  if (state === 'started') {
    nightmare.emit(
      'download',
      username + '/leads/' + date + '.pdf',
      downloadItem
    )
  }
})

nightmare
  .downloadManager()
  .goto(url)
  .type('input#Login', username)
  .type('input#Password', password)
  .click('input.submit[value=" Log In "]')
  .wait('#hplScannedLeads')
  .goto(urlLeads)
  // .evaluate((hrefs, done) => {
  //   l = document.querySelectorAll('a.PDF');
  //   for (var i = 0; i < l.length; i++) {
  //     href = { [l[i].href]: false };
  //   }
  //   return hrefs;
  // })
  // .then(function(result) {
  //   console.log(href);
  // })
  // .then(() => {
  //   return nightmare
  .click('a[href="ViewFiles.aspx?FID=83123"]')
  .waitDownloadsComplete()
  // })
  .then(() => {
    console.log('Download Success')
    return nightmare.end()
  })
  .catch(error => {
    console.error('Search failed:', error)
  })
