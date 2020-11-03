/**
 * @overview Starting a basic express server
 * @author Florian Bauer
 */


/**
 * Importing express
 */
const express = require('express');
const { allowedNodeEnvironmentFlags, ppid } = require('process');
/**
 * Initilize the app
 */
const app = express();



/**
 * Declaring a basic route
 */
app.get('/', (req, res) => {
    /**
     * Sending API informations
     */
    res.send({
        currentVersion: 'v1-alpha',
        stableVersion: null
    });
});



/**
 * Starting the server on Port 3000
 */
app.listen(3000, () => console.log('server started on port 3000'));