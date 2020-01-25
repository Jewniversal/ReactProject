const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//Body parser Middleware

app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log("Mongo DB connected")).catch(err => console.log(`Error atl ${err}`));

//
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`))