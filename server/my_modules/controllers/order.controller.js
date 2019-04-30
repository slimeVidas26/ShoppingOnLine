const express = require('express');
const router = express.Router();
module.exports = router;
//module.exports = app;



// load users schema
const orderModel = require('./../models/Order.model');
const cartDetailModel = require('./../models/CartDetail.model');


// create web token
const jwt = require('jsonwebtoken');
// logged check middleware
const checkAuth = require('../../utilitaire/jwt_middleware');
// const db = require('../../utilitaire/dbfilemanager');

// bcrypt password controlle
const pwd = require('../../utilitaire/bcrypt');

// user api routes
router.get('/', getAllOrders);
router.post('/', checkAuth, addOrder);
router.get('/:id([0-9 a-z]+)', getOrder);
router.put('/push-order/:id([0-9 a-z]+)', checkAuth, pushOrder);





async function getAllOrders(req, res) {
    try {
        let orders = await orderModel.all();
        res.json(orders);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

async function getOrder(req, res) {
    try {
        let id = req.params.id;
        let cart = await cartDetailModel.byId(id);
        res.json(cart);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}



async function addOrder(req, res) {

    try {
        let orderFile = req.userData.id;
        const fs = require("fs");
        let writeStream = fs.createWriteStream(`./data/${orderFile}.txt`);
        const dbfilemanager = require('./dbfilemanager')(`./data/${orderFile}.txt`);

      
        let user = req.userData.id;
        let cart = req.userData.cart;
        let totalAmount = req.userData.total_amount;
        let createObj = {
             city: req.body.city,
             delivery_date: req.body.delivery_date,
             payment_method: req.body.payment_method,
            _user: user,
            _cart: cart,
            total_amount: totalAmount,
            delivery_adress : req.body.delivery_adress,

        }
        console.log(createObj);
       
        // -INSERT THE NEW ORDER TO THE DB
        let newOrder = await orderModel.create(createObj);

        // -SET RESULT OBJECT WITH  ORDER  DETAILS 
        let order = await dbfilemanager.get();
        let result = {
            order: {
                id: newOrder._id,
                _user: newOrder._user,
                _cart: newOrder._cart,
                total_amount: newOrder.total_amount,
                city: newOrder.city,//newOrder.city,
                delivery_adress: newOrder.delivery_adress,//newOrder.street,
                delivery_date: newOrder.delivery_date,//newOrder.delivery_date,
                payment_method: newOrder.payment_method//newOrder.payment_method,

            }
        }

         if(result) {
            await dbfilemanager.set(result);

            res.setHeader('Content-disposition', 'attachment; filename=5b9a8d69645e421948972d70');
            res.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');        

    res.download(`./data/${orderFile}.txt`, `${orderFile}.txt`, function(err){
        if (err) {
           "Handle error, but keep in mind the response may be partially-sent"
           "so check res.headersSent"
        } else {
           "decrement a download credit, etc."
        }
      });
         }
       

    } catch (e) {
        console.log(e);
        res.status(403).end();
    }
}


async function pushOrder(req, res) {
    try {
        let orderID = req.params.id;
        let order = await orderModel.byId(orderID);
        let toAddObj = {
            order: {

                _id: orderID,
                city: req.body.city,
                delivery_adress: req.body.delivery_adress,
                delivery_date: req.body.delivery_date,
                payment_method: req.body.payment_method

            }
        }

        //let cartDetailID =  req.userData.cartDetail;
        let newAddedOrder = await orderModel.updateOrder(orderID,
            toAddObj.order.city,
            toAddObj.order.delivery_adress,
            toAddObj.order.delivery_date,
            toAddObj.order.payment_method
        );
        console.log(newAddedOrder);
        res.json({
            newAddedOrder
        });
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}