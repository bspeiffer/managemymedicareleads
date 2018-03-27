var Nightmare = require('nightmare');
require('nightmare-download-manager')(Nightmare);
var vo = require('vo');

var links = [];
var username = '103016';
var password = 'epeiff531';
var url = 'https://online.tlleadmanager2.com/MyAccountLogin/';
var urlLeads = String(url) + 'ScannedLeads.aspx';

var thisfunction = function() {
  var result = [],
    href = {};
  var list = document.querySelectorAll('a.PDF');
  list.forEach(function(item) {
    result.push(item.href);
  });
  result.forEach(function(link) {
    href[link] = false;
  });
  return href;
};

vo(run)(function(err, result) {
  if (err) throw err;
});

function* run() {
  var nightmare = Nightmare({ show: true });

  yield nightmare
    .goto(url)
    .type('input#Login', username)
    .type('input#Password', password)
    .click('input.submit[value=" Log In "]')
    .wait('#hplScannedLeads')
    .goto(urlLeads)
    .exists('a.PDF')
    .then(result => {
      console.log(result);
    });

  yield nightmare.evaluate(thisfunction).then(function(list) {
    console.log(list);
  });

  yield nightmare.end();
}
