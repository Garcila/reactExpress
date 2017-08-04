const express = require('express');
const cors = require('cors');

const app = express();

const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const busboyBodyParser = require('busboy-body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const images = require('./routes/images');
const profile = require('./routes/profile');

//mongoose setup
const mongoose = require('mongoose');

//file with keys not to be saved to git
const keys = require('./config/keys.js');

//bluebird promises to replace default mongoose promises
mongoose.Promise = require('bluebird');

//connection to mlab mongodb
mongoose.connect(keys.mongoURI);

//connection to local mongo db
// mongoose.connect('mongodb://localhost/faces');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', index);
app.use('/users', users);
app.use(images);
app.use('/profile', profile);

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use((err, req, res) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

/////==============================================
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`running at Port: ${PORT}`));
