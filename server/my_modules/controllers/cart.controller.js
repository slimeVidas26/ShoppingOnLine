const express = require('express');
const router = express.Router();
module.exports = router;

// load users schema
const cartModel = require('./../models/Cart.model');

// create web token
const jwt = require('jsonwebtoken');
// logged check middleware
//const checkAuth = require('../../jwt_middleware');
// bcrypt password controlle
const pwd = require('../../utilitaire/bcrypt');

// user api routes
router.get('/', getAllCarts);


async function getAllCarts(req, res) {
    try {
        let carts = await cartModel.all();
        res.json(carts);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}