

var Turtle = require('./turtle/index.js')


new Turtle().
  server({
    path: __dirname + '/server.js',
    log: {
      prefix: '(server) ',
      silent: false
    }
  }).
  template({
    path: __dirname+'/turtle/test/template/jQueryTemplate.html'
  }).
  test({
    path: __dirname + '/client.js'
  }).
  debug().
  run();