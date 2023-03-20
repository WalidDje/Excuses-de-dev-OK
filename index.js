const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 8000;

dotenv.config();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, './client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

const excuses = require('./data/excuses.json');

app.get("/:http_code", function (req, res, next) {
  var http_code = req.params.http_code;
  var excuse = excuses.find((e) => e.http_code == http_code);

  if (excuse)
    return res.json(excuse.message);

  return res.status(404).end("404 Not found");
});

app.get("/api/excuses", (req, res) => {
  res.sendFile(path.join(__dirname, "./data/excuses.json"));
});

app.post('/api/excuses', (req, res) => {
    res.send('We are posting an excuse');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
