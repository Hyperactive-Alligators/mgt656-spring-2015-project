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

function example (request, response) {
  var contextData = {
    'title': 'TA example',
    'tagline': 'hahahahahahahaha'
  };
  response.render('example.html', contextData);
}

function donate (request, response) {
  var contextData = {
    'title': 'TA example',
    'tagline': 'donate'
  };
  response.render('example.html', contextData);
}

module.exports = {
  index: index,
  example: example,
  donate: donate
};
