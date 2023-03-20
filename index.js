const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

//CONNECTION A LA BDD SQLITE3
const sqlite3 = require("sqlite3").verbose();
const db_name = path.join(__dirname, "data", "apptest.db");
const db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connexion réussie à la base de données 'apptest.db'");
});

//CREATION BDD SQLITE3  ** ECHEC **
const sql_create = `CREATE TABLE IF NOT EXISTS ExcusesData (
  http_code INTEGER PRIMARY KEY AUTOINCREMENT,
  tag VARCHAR(100) NOT NULL,
  message VARCHAR(100) NOT NULL,
);`;
db.run(sql_create, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Création réussie de la table 'ExcusesData'");
});

//PORT LISTENING
const port = process.env.PORT || 8000;

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './client/build')));

//ROUTE GET HOME
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

const excusesData = require('./data/excuses.json');

//SHOW EXCUSE WITH HTTP CODE
app.get("/:http_code", function (req, res, next) {
  var http_code = req.params.http_code;
  var excuse = excusesData.find((e) => e.http_code == http_code);

  if (excuse)
    return res.json(excuse.message);
  return res.status(404).end("404 Not found");
});

//GET EXCUSES
app.get("/api/excuses", (req, res) => {
  res.sendFile(path.join(__dirname, "./data/excuses.json"));
});

//POST EXCUSES
app.post('/api/excuses', (req, res) => {
    const excuse = new Excuse({
      http_code: req.body.http_code,
      tag: req.body.tag,
      message: req.body.message
    });
    excusesData.save()
    .then(() => res.status(201).json({ message: 'Excuse enregistrée !'}))
    .catch(error => res.status(400).json({ error }));
});

// PORT LISTENING
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
