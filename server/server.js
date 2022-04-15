const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const express = require("express");
const mongo = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = express.Router();
const routes = require('./routes');

const uri = process.env.MONGO_CONNECTION_STRING;
const mongocli = mongo.MongoClient;

// app.use(express.static("./build/"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'POST', 'GET');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-headers', 'Origin, X-Requested-with, Content-Type, Accept, referrer');
  next();
});

app.listen(process.env.SERVER_PORT, process.env.HOST, () => {
  console.log(`Server Running at http://${process.env.HOST}:${process.env.SERVER_PORT}`);
  dbConnectionTest();
  routes(app);
});

dbConnectionTest = () => {
  console.log("Database connection testing...");
  mongocli.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, db) => {
      if (err) throw err;
      console.log("Database Connected Successfully at " + uri);
      db.close;
      console.log("Database connection closed!");
    }
  );
};