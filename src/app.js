const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

// View engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const apiRouter = require("./api/routes");

app.use('/api/v1', apiRouter);

app.use('/health', (req, res) => res.status(200).send({ status: "ok" }))

app.use('*', (req, res) => {
  return res.status(404).json({
    message: 'API endpoint does not exist',
    statusCode: 404
  });
});

module.exports = app;