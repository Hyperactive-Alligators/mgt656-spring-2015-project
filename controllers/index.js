'use strict';

var events = require('../models/events');


/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var curDateTime = new Date();
  var contextData = {
    'title': 'MGT 656',
    'tagline': 'You are doomed (just kidding).',
    'events': []
  };
  for (var n=events.all.length-1; n >= 0; n--) {
    var event = events.all[n];
    if(event.date > curDateTime) {
      contextData.events.push(event);
    }
  }
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
