const express = require('express');
const router = express.Router();
module.exports = router;

// load users schema
const userModel = require('./../models/User.model');
const cartModel = require('./../models/Cart.model');


// create web token
const jwt = require('jsonwebtoken');

// bcrypt password controlle
const pwd = require('../../utilitaire/bcrypt');

// user api routes /shopping/api/users
router.post('/login', loginUser);
//router.get('/', getAllUsers);
router.post('/', registerUser);



async function loginUser(req, res) {
    try {

        let result = {
            token: null
        }

        let foundUser = await userModel.byUsername(req.body.username);
        console.log('foundUser', foundUser);
        if (foundUser) {
            let verifiedPwd = await pwd.verify(req.body.password, foundUser.hash);
            if (verifiedPwd) {

                //create a new cart only if ! cart._user
                let getUserCart = await cartModel.byUser(foundUser._id);
                console.log("getUserCart", getUserCart, foundUser._id);

                if (getUserCart) {
                    console.log('User cart exists');
                    result.user = {
                        cart: getUserCart._id
                    }
                } else {
                    result.user.cart = {
                        _user: foundUser._id,
                        created:  Date.now() 
                    }
                    let newCart = await cartModel.create(result.user.cart);
                    //console.log(newCart);

                    //let cartUser = await cartModel.byId(result.cart._id);

                    console.log('User new cart is created');

                    //let getUser = await cartModel.byUser(foundUser._id); 
                    result.user = {
                        cart: newCart._id
                    }

                }


                //console.log("cartUser", cartUser);

                result.user = {
                    id: foundUser._id, //foundUser.id,
                    first_name: foundUser.first_name,
                    last_name: foundUser.last_name,
                    username: foundUser.username,
                    password: foundUser.password,
                    ID: foundUser.ID,
                    city: foundUser.city,
                    adress: foundUser.adress,
                    role: foundUser.role,
                    cart: result.user.cart,
                    created :getUserCart.created,
                    cart:getUserCart._id
                }

                

                result.token = jwt.sign(
                    result.user,
                    process.env.JWT_KEY, {
                        expiresIn: "24h"
                    }
                );
            }
            res.json(result);
        } else {
            res.end("User do not exists");

        }

    } catch (e) {
        console.log(e);
        res.status(403).end();
    }
}
/*********************************************************************************** */
async function getAllUsers(req, res) {
    try {
        let users = await userModel.all();
        if (users.length == 0) {
            res.json('No users on database');
        }
        res.json(users);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}



async function registerUser(req, res) {

    try {
        // -CREATE THE NEW USER ACCORDING TO THE DATA PROVIDED BY THE USER
        let createUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            //!password
            ID: req.body.ID,
            city: req.body.city,
            adress: req.body.adress,
            //role : req.body.role
        }
        console.log(createUser)
        // - IF ONE OF THE REQUIRED FIELDS IS EMPTY ,SHOW ERROR
        if (!createUser.first_name || !createUser.last_name || !createUser.username ||
            !createUser.ID || !req.body.password || !createUser.city || !createUser.adress ) {
            throw "Create user missing details";
        }
        // -IF THE USERNAME-EMAIL EXISTS,SHOW ERROR
        if (await userModel.byUsername(createUser.username) != null) {
            throw "Create user username exists";
        }
        // - ADD TO THE CREATED OBJECT THE PASSWORD AFTER HASHING
        createUser.hash = await pwd.hash(req.body.password);

        // -INSERT THE NEW USER TO THE DB
        let newUser = await userModel.register(createUser);

        // -SET RESULT OBJECT WITH USER DETAILS AND TOKEN
        let result = {
            user: {
                id: newUser._id,
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                username: newUser.username,
                password: newUser.password,
                ID: newUser.ID,
                city: newUser.city,
                adress: newUser.adress,
                role: newUser.role
            }
        }

        result.token = jwt.sign(
            result.user,
            process.env.JWT_KEY, {
                expiresIn: "5h"
            }
        );
        // -SHOW RESULT
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(403).end();
    }
}