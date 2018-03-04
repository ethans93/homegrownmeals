'use strict';

require('../app').createApp()
    .then(function(app) {
        const PORT = process.env.PORT || 5000;
        const server = app.listen(PORT, function() {
            console.log('Listening on port:', server.address().port);
        });
    })
    .catch(function(err) {
        console.error('Error creating app');
        console.error(new Date(), err);

        process.exit(1);
    });
