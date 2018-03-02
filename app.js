let launchFactory = require('./server/launch-factory');
require('dotenv').config();

module.exports.createApp = function () {
    return launchFactory.setupApp()
        .then(mountUrlEndpoints);
};

function mountUrlEndpoints(app) {
    //app.logger.info("Creating url endpoints");

    app.get('/', function (req, res) {
        res.sendFile('dist/index.html', { root: __dirname });
    });

    return app;
}
