var restify = require('restify');
var config = require('./config');
var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser({ mapParams: true }));
server.use(restify.CORS());
server.use(restify.fullResponse());

require("./routes").initializeRoutes(server);

server.listen(config.app.port, () => console.log("Server started and listening on " + config.app.port));