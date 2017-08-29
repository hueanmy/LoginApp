require('dotenv').config();
const express           = require('express');
const bodyParser        = require('body-parser');
const expressValidator  = require('express-validator');
const session           = require('express-session');
const passport          = require('passport');
const flash             = require('connect-flash');
const cookieParser      = require('cookie-parser');
const nunjucks          = require('nunjucks');
const router            = require('./http/router/router');
const path              = require('path');

let app = express();

//set static file
app.use(express.static(path.join(__dirname, '/public')));

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());
app.use(cookieParser());

//nunjucks
nunjucks.configure('./views', {
    autoescape: true,
    express: app
} ) ;

//express session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

//passportjs
app.use(passport.initialize());
app.use(passport.session());
require('./app/auth-service/config')(passport);

//express-validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

//Global Variable
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

app.use(router);

app.listen(8000, () => {
   console.log('server at port 8000');
});
