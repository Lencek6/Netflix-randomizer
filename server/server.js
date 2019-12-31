let createError = require('http-errors');
let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let http = require('http');

const port = 3000

let moviesRouter = require('./routes/movies');
let usersRouter = require('./routes/users');
let loginRouter = require('./routes/login.js');
let registerRouter = require('./routes/register')

let server = express();

server.set('port', port);
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(cookieParser());

//CORS
let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-access-token,authorization');
    next();
}
server.use(allowCrossDomain);


server.use('/login', loginRouter);
server.use('/movies', moviesRouter);
server.use('/users', usersRouter);
server.use('/register', registerRouter);

// catch 404 and forward to error handler
server.use(function (req, res, next) {
    next(createError(404));
});

// error handler
server.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;


    // render the error page
    res.status(err.status || 500);
    res.send('page does not exist!');
});

let serverListen = http.createServer(server)

serverListen.listen(port);

