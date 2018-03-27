const path = require('path');
const express = require('express');
const app = express();    // Create an Express application
const publicPath = path.join(__dirname, '..', '/public');
const port = process.env.PORT || 3000;

//
//   Use the public directory to serve up our static assets
//
app.use(express.static(publicPath));

//
//   If what was requested is not in the public folder, give them back index.html.
//
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

//
//   Start the server on Port 3000
//
app.listen(port, () => {
    console.log('Server is up');
});