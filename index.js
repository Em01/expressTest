const express = require('express');

/*
generates a new application by running a new express app. Represents the underlying express
server. Used to set up configuration.
that will llisten for incoming requests that are being routed to the express side of
the app from the node side and then route the requests on to different handlers.
The route handlers will be associated with the app object.
*/

const app = express();


//Route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
})


//express tells node it wants to listen for incoming traffic on port 5000 or env var port. dev/prod etc
const PORT = process.env.PORT || 5000;
app.listen(5000);
