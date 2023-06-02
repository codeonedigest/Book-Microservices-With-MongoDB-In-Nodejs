const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const customResourceResponse = require('./utils/constant');
const dbconfig = require('./config/databaseconfig');
const bookRoutes = require('./route/booksroute');

const app = express();

app.use(bodyParser.json());

mongoose.connect(dbconfig.booksMongoURI, {}).then(() => console.log('MongoDB Connected')).catch((err) => console.log(err));

app.use('/api/v1', bookRoutes);

// Basic 404 handler
app.use((req, res) => {
    res.status(404).send({
      message: 'The requested URL could not be found.',
      statusCode: 404,
    });
  });
  
app.use((error, req, res, next) => {
    const { message } = customResourceResponse.serverError;
    const data = {
    Code: `${error.code ? error.code : ''}`,
    Stacktrace: `${error.stack}`
    };
    res.status(500).json({ message, data });
});


const port = 8080;

app.listen(port, () => console.log('Book server started and listening on port ' + port));



