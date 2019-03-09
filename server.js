/* ==========================================================================
** Server Main File
** 09/03/2019
** Alan Medina Silva
** Init Server and Control it with src/App.js File
** ========================================================================== */

// --------------------------------------
//  Import Dependences
// --------------------------------------
    const http = require('http');
    const port = process.env.PORT || 3000;
    const app = require('./app');

// --------------------------------------
//  Create Server
// --------------------------------------
    const server = http.createServer(app);


// --------------------------------------
//  Start Server
// --------------------------------------
    server.listen(port);