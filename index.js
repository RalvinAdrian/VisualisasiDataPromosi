const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Buat middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// setting ejs nya
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routing
app.get('/', (req, res) => {
    console.log('rendering homepage');
  res.render('Homepage');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.get('/insert', (req, res) => {
  res.render('insert');
});

// Start servernya
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
