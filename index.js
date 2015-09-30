require('babel/register')({
  stage: 0
});

var server = require("./src/server");
var express = require("express");
var CONSTS = require("./src/utils/consts");

server.listen(CONSTS.APP_PORT, function(e){
  if(e){
    console.error(e);
  }

  console.log('Server listening on ', CONSTS.APP_PORT);
});