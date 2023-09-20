const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes');
const db = require('./app/config/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// Port configuration
const port = process.env.PORT || 3000; // Use the Heroku-defined port or 3000 by default

// Cookie middleware
app.use(cookieParser());

// Debug logger
app.use(morgan('combined'));

// Configuring static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', express.static(path.join(__dirname, 'public')));

// Configure Handlebars template engine
app.engine('.hbs', hbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'src', 'resources', 'views'));

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Configure routes
route(app);

// Connect to the database
db.connect();

// Start the server
app.listen(port, () => console.log(`Your app is running on port: ${port}`));
