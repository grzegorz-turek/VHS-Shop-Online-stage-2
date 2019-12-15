const express = require('express');
const cors = require('cors');
const config = require('./config');
const filmRoutes = require('./routes/film.routes');
const mongoose = require('mongoose');
const loadData = require('./loadData');
const helmet = require('helmet');
const mongoSanitize = require('mongo-sanitize');
const path = require('path');
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', filmRoutes);
app.use((req, res, next) => {
    mongoSanitize(req.body);
    next();
});

app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
  });
  

mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the database', config.DB);
    loadData();
});
db.on('error', (err) => console.log('Error ' + err));

app.listen(config.PORT, () => {
    console.log('Server is running on port:', config.PORT);
});