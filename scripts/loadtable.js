$(document).ready(function () {
  alert('Loaded')
})

// function show() {

// 	// Load JSON
// 	var leads = [
//   {
//     "_id": "5aa2f56f62a2fb8d6a6bb543",
//     "index": 0,
//     "guid": "8bf48c5c-ec0a-4887-97a2-7639a0307a34",
//     "isActive": false,
//     "balance": "$2,167.87",
//     "picture": "http://placehold.it/32x32",
//     "age": 32,
//     "eyeColor": "green",
//     "name": "Colette Vance",
//     "gender": "female",
//     "company": "ZAGGLES",
//     "email": "colettevance@zaggles.com",
//     "phone": "+1 (897) 594-2886",
//     "address": "178 Gerry Street, Bawcomville, Connecticut, 2069",
//     "about": "Cupidatat ea proident excepteur excepteur ad tempor tempor nulla ullamco et non. Excepteur eu aliquip in est nostrud anim voluptate dolore laboris nisi sit. Tempor quis enim sit excepteur sit culpa pariatur sit quis reprehenderit proident nostrud quis.\r\n",
//     "registered": "2014-08-15T01:12:51 +04:00",
//     "latitude": -37.389077,
//     "longitude": 63.428338,
//     "tags": [
//       "fugiat",
//       "irure",
//       "velit",
//       "do",
//       "velit",
//       "eiusmod",
//       "incididunt"
//     ],
//     "friends": [
//       {
//         "id": 0,
//         "name": "Christa Burnett"
//       },
//       {
//         "id": 1,
//         "name": "Bonnie Davenport"
//       },
//       {
//         "id": 2,
//         "name": "Manning Holman"
//       }
//     ],
//     "greeting": "Hello, Colette Vance! You have 7 unread messages.",
//     "favoriteFruit": "strawberry"
//   },
//   {
//     "_id": "5aa2f56fc46e52ce98dfcdf0",
//     "index": 1,
//     "guid": "5af823e4-66f1-47d4-8ae7-d99b31573a48",
//     "isActive": false,
//     "balance": "$3,024.48",
//     "picture": "http://placehold.it/32x32",
//     "age": 36,
//     "eyeColor": "green",
//     "name": "Leta Hurst",
//     "gender": "female",
//     "company": "GORGANIC",
//     "email": "letahurst@gorganic.com",
//     "phone": "+1 (845) 566-2905",
//     "address": "838 Ruby Street, Glasgow, Rhode Island, 2113",
//     "about": "Sit labore voluptate sint id reprehenderit. Consequat ipsum ut adipisicing reprehenderit ex elit id. Pariatur pariatur fugiat id aute sint deserunt enim minim magna anim commodo.\r\n",
//     "registered": "2014-12-23T06:27:00 +05:00",
//     "latitude": -0.886737,
//     "longitude": -126.434481,
//     "tags": [
//       "aliqua",
//       "id",
//       "nulla",
//       "sunt",
//       "consectetur",
//       "esse",
//       "culpa"
//     ],
//     "friends": [
//       {
//         "id": 0,
//         "name": "Katheryn Bird"
//       },
//       {
//         "id": 1,
//         "name": "Dee Waters"
//       },
//       {
//         "id": 2,
//         "name": "White Macdonald"
//       }
//     ],
//     "greeting": "Hello, Leta Hurst! You have 8 unread messages.",
//     "favoriteFruit": "strawberry"
//   }];

// 	// $.getJSON("./generated.json", function(json) {
// 	//   leads = json;
// 	// });

// 	    // 1. remove all existing rows
//     $("tr:has(td)").remove();

//     // 2. get each article
//     $.each(leads, function (i,lead) {

//         // 2.2 Create table column for categories
//         var td_friends = $("<td/>");

//         // 2.3 get each category of this article
//         $.each(lead.friends, function (i, friend) {
//         	$.each(friend.name, function(i, name) {
//             var span = $("<span class='label label-info' style='margin:4px;padding:4px' />");
//             span.text(name);
//             td_friends.append(span);
//         	});
//         });

//         // 2.4 Create table column for tags
//        var td_tags = $("<td/>");

//         // 2.5 get each tag of this article
//         $.each(leads.tags, function (i, tag) {
//             var span = $("<span class='label' style='margin:4px;padding:4px' />");
//             span.text(tag);
//             td_tags.append(span);
//         });

//         // 2.6 Create a new row and append 3 columns (title+url, categories, tags)
//         $("#added-articles").append($('<tr/>')
//                 .append($('<td/>').html("<a href='"+lead.picture+"'>"+lead.name+"</a>"))
//                 .append(td_friends)
//                 .append(td_tags)
//         );
//     });

// }

// Working example

function show () {
  // JSON Data
  var articles = [
    {
      title: 'jQuery.each(JSON)',
      url: 'http://hmkcode.com/jquery-each-json/',
      categories: ['jQuery'],
      tags: ['jquery', 'json', '$.each']
    },
    {
      title: ' Java Servlet Send & Receive JSON Using jQuery.ajax() ',
      url:
        'http://hmkcode.com/java-servlet-send-receive-json-using-jquery-ajax/',
      categories: ['Java'],
      tags: ['java', 'json', 'jquery']
    }
  ]

  // 1. remove all existing rows
  $('tr:has(td)').remove()

  // 2. get each article
  $.each(articles, function (index, article) {
    // 2.2 Create table column for categories
    var td_categories = $('<td/>')

    // 2.3 get each category of this article
    $.each(article.categories, function (i, category) {
      var span = $(
        "<span class='label label-info' style='margin:4px;padding:4px' />"
      )
      span.text(category)
      td_categories.append(span)
    })

    // 2.4 Create table column for tags
    var td_tags = $('<td/>')

    // 2.5 get each tag of this article
    $.each(article.tags, function (i, tag) {
      var span = $("<span class='label' style='margin:4px;padding:4px' />")
      span.text(tag)
      td_tags.append(span)
    })

    // 2.6 Create a new row and append 3 columns (title+url, categories, tags)
    $('#leads-table').append(
      $('<tr/>')
        .append(
          $('<td/>').html(
            "<a href='" + article.url + "'>" + article.title + '</a>'
          )
        )
        .append(td_categories)
        .append(td_tags)
    )
  })
}
