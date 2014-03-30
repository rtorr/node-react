require('node-jsx').install();

var Hapi = require('hapi');
var React = require('react');
var internals = {};
var mainLayout = require('./jsx/main');

var rootHandler = function (request, reply) {
  reply.view('index', {
    react_component: React.renderComponentToString(mainLayout({}))
  });
};

// Add the route
internals.main = function () {

var options = {
  views: {
    engines: { jade: 'jade' },
    path: __dirname + '/layouts',
      compileOptions: {
        pretty: true
      }
    }
  };

  var server = new Hapi.Server(8000, options);
  server.route({
      method: 'GET', path: '/dist/{path*}',
      handler: {
        file: { path: __dirname + '/../dist/bundle.js' }
      }
    });
  server.route({ method: 'GET', path: '/', handler: rootHandler });
  server.start();
};


internals.main();