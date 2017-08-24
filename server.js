require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const passport = require('passport');
const nunjucks = require('nunjucks');
const router = require('./app/http/router/router');
const path = require('path');

let app = express();

//set static file
app.use('/static', express.static(path.join(__dirname, 'public')));

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//passportjs
nunjucks.configure('./views', {
    autoescape: true,
    express: app
} ) ;

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

app.use(router);


app.listen(8000, () => {
   console.log('server at port 8000');
});
