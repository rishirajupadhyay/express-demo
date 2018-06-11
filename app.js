var express = require('express'),
    nunjucks = require('nunjucks'),
    router = require('./routes'),
    basicAuth = require('basic-auth-connect'),
    Contentstack = require('contentstack');
var app = express();

app.use(basicAuth('admincs', 'admincs'));

app.use(express.static(__dirname + '/public'));

nunjucks.configure('views', {
  autoescape: true,
  express   : app
});
app.set('view engine', 'nunjucks');

app.use('/', router);
app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = app;
