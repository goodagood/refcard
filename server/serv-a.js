// The orginal server.js -->  can not load module: creationix
// ../node-modules/creationix/ gets no index.js, and no `main` in package.json
var Stack = require('stack'),
    //Creationix = require('creationix'),
    Http = require('http'),
    Logger = require('./logger');

Http.createServer(Stack(
  Logger.log(),
  require('wheat')(__dirname +"/..")
)).listen(3880);




