var express = require('express');
var nunjucks = require('nunjucks');
var request = require('request');
var router = express.Router();
var config = require('../config/default');


router.get('/', function(req, res) {
 console.log("<===========API call=========>", config.protocols + "://" + config.host + "/" + config.port + "/content_types/" + config.content_type + "/entries" + "?" + "api_key" + "=" + config.urls.api_key + "&" + "access_token" + "=" + config.urls.access_token + "&" + "environment" + "=" + config.urls.environment);
 request(config.protocols + "://" + config.host + "/" + config.port + "/content_types/" + config.content_type + "/entries" + "?" + "api_key" + "=" + config.urls.api_key + "&" + "access_token" + "=" + config.urls.access_token + "&" + "environment" + "=" + config.urls.environment, (error, result, next) => {
 console.log('<==========Json Result=========>', typeof result.body);

  var strJson = result.body;
  var objJson = JSON.parse(strJson);
  console.log('<========objJson=========>', objJson);

  res.render('../views/pages/home/index.html', objJson);

 });
});

module.exports = router;
