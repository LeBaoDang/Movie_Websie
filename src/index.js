const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middlewares/SortMiddleware');
const handlebars = require('express-handlebars').create(
  {
    extname : '.hbs',
    helpers: require('./helpers/handlebars')
  }
);
const app = express();
const port = 3000;

const route = require('./routes');

// connect db
const db = require('./config/db');

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended : true
}));

app.use(express.json());

app.use(methodOverride('_method'));

// custom middleware
app.use(SortMiddleware);

// HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resource','views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})