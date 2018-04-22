const express = require('express');

/*
generates a new application by running a new express app. Used to set up configuration
that will llisten for incoming requests that are being routed to the express side of
the app from the node side and then route the requests on to different handlers.
The route handlers will be associated with the app object.
*/

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
})

app.listen(5000);
