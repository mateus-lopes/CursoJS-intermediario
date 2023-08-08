const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connection = 'mongodb+srv://mateus-lopes:MateusL22!@#@cursojs01.ercspyx.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(connection, {useNewUrlParser: true, useUnifiedTopology: true});
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log(`Server started on port 3000`);
});