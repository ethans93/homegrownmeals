const launchFactory = require('./server/launch-factory');
const _ = require('lodash');
const { Pool } = require('pg');
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

    const pool = new Pool({
      user: process.env.RDS_USERNAME,
      host: process.env.RDS_HOSTNAME,
      database: process.env.RDS_DB_NAME,
      password: process.env.RDS_PASSWORD,
      port: process.env.RDS_PORT
    })

    pool.connect()

    pool.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
      console.log(err ? err.stack : res.rows[0].message) // Hello World!
      pool.end()
    })


    return app;
}
