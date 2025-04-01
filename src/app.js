const express = require('express');
// const bodyParser = require('body-parser');
const router = require('./routes');
const path = require('path')
const cookieParser = require('cookie-parser');


const app = express();
const port = 3000;

app.set('view engine', 'ejs')
//app.use(express.static(path.join(__dirname, '/views/')));
app.set('views', path.join(__dirname, '../views'))

// Middleware
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))

// Usar las rutas definidas en formRoutes.js
app.use(router);


// app.get('/', (req, res) => {
//   res.render('login.ejs')
// })

// app.get('/index', (req, res) => {
//   res.render('index.ejs')
// })

// app.get('/resetScreen', (req, res) => {
//   res.render('reset.ejs')
// })
// app.get('/signInScreen', (req, res) => {
//   res.render('signIn.ejs')
// })



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app