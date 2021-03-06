//const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// option pour enlever les warnings
const mongooseParams = {
  useUnifiedTopology : true,
  useNewUrlParser : true,
  useCreateIndex : true
}

mongoose.connect('mongodb://mongo/sqynode', mongooseParams); // docker (mongo = nom du container)
// mongoose.connect('mongodb://localhost:27017/apinodeipssi', mongooseParams); // windows sans docker

app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json());

const userRoutes= require ('./routes/userRoute');
userRoutes(app);

const sessionRoutes= require ('./routes/sessionRoute');
sessionRoutes(app);

const moduleRoutes= require ('./routes/moduleRoute');
moduleRoutes(app);

const noteRoutes= require ('./routes/noteRoute');
noteRoutes(app);
//server.listen(port, hostname);
app.listen(port, hostname);
