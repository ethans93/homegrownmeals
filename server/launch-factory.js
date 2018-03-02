let express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

module.exports.setupApp = function setupApp() {
    var app = express();

    return Promise.resolve(app)
      .then(setupMiddleware)
};
function setupMiddleware(app) {
    //Using static files such as client-side javascript, css, and html.
    app.use(express.static(path.join(__dirname + '/../dist')));
    app.use(cors());

    //Using bodyParser in order to get variables from input data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    return app;
}
