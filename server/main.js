console.clear();

/**
 INSTALLED PACKAGES
 npm install express  mongoose  body-parser  jsonwebtoken  bcrypt 
npm start to fire nodemon
**/
const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
// require('./utilitaire/utils');




const PORT = process.env.PORT || 3000;
//***************************** mongoose ***************************************//
// register to error and connect events before making connection
const mongoose = require('mongoose');
mongoose.connection.on('error', (e) => console.log('Db Connect Error:', e));
mongoose.connection.on('connected', () => {
    console.log('Db Connected to:', mongoose.connection.name);
    // start server since db is properly connected
    app.listen(PORT, () => {
        console.log(`Node listening on localhost:${PORT}`);
    });
});
// actually connect to db
const db = 'mongodb://localhost:27017/shoppingOnline';
mongoose.connect(db, {
    useNewUrlParser: true
});
//*************************************************************************** */

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// CORS 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');      
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.status(200).end();
    }
    else {
      next();
    }
});

//request dump debug
app.use( (req,res,next)=> {
    if(req.originalUrl=='/favicon.ico') {  
        next();
    }
    else {
        //console.clear();
        console.log('>',req.method,req.originalUrl);
        if(Object.entries(req.body).length) {
            console.log('Posted:');
            console.log(req.body);
            console.log("\n");
        }
        next();
    }
});


app.use('/uploads', express.static('uploads'));

// routing API
app.use('/shopping/api/users', require('./my_modules/controllers/user.controller'));
app.use('/shopping/api/categories', require('./my_modules/controllers/category.controller'));
app.use('/shopping/api/products', require('./my_modules/controllers/product.controller'));
app.use('/shopping/api/carts', require('./my_modules/controllers/cart.controller'));
app.use('/shopping/api/cart-detail', require('./my_modules/controllers/cartDetail.controller'));
app.use('/shopping/api/orders', require('./my_modules/controllers/order.controller'));


// return error if got here with no valid route
app.use('**', (req, res) => {
    console.log('Unknown request');
    res.status('404').send("404 Unknown Request");
});

// app.use('/', (req, res) => {
//     res.send('Happy to be here');
// });