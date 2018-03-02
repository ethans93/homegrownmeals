let express = require('express');

module.exports.setupApp = function setupApp() {
    var app = express();

    return Promise.resolve(app);
};
