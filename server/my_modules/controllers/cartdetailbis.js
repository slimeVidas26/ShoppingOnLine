const express = require('express');
const router = express.Router();
module.exports = router;

// load users schema
const cartDetailModel = require('./../models/CartDetail.model');
const productModel = require('./../models/Product.model');


// create web token
const jwt = require('jsonwebtoken');
// logged check middleware
const checkAuth = require('../../utilitaire/jwt_middleware');
// bcrypt password controlle
const pwd = require('../../utilitaire/bcrypt');

// user api routes
//-- /shopping/api/cart-detail
router.get('/', getAllCartsDetail);
router.get('/:cartId([0-9 a-z]+)', getByCart);

router.get('/:id([0-9 a-z]+)', getCartDetail);

router.post('/add', checkAuth, addProductToCart);
//router.delete('/delete/:id([0-9 a-z]+)', checkAuth, deleteProductFromCart);
router.delete('/product/:id([0-9 a-z]+)', checkAuth, deleteCartproduct);
//router.delete('/:id([0-9]+)',checkAuth,deleteUser);
//router.delete('/:id([0-9]+)',checkAuth,deleteUser);






async function getAllCartsDetail(req, res) {
    try {
        let cartsDetail = await cartDetailModel.all();
        res.json(cartsDetail);
        console.log(cartsDetail)
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

async function getCartDetail(req, res) {
    try {
        let cartDetailId = req.params.id;
        let cartDetail = await cartDetailModel.byId(cartDetailId);
        res.json(cartDetail);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

async function getByCart(req, res) {
    try {
        let cartId = req.params.cartId;
        let cart = await cartDetailModel.byCart(cartId);
        res.json(cart);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

async function addProductToCart(req, res) {
    try {
        //  let productId = req.params.id;
        //let productId = "5b8ad062b127502638408d52";
        let productId = req.body.id;
        let product = await productModel.byId(productId);
        let totalAmount = 0;
        
        //let allCartsDetail = cartDetailModel.all();
        let panier = await cartDetailModel.byCart(req.userData.cart);
        let panierProduct = null;
        console.log("panier", panier);


        let toAddObj = {
            product: {
                _id: productId,
                product_name: product.product_name,
                _category: product._category._id,
                price: product.price,
                picture: product.picture,
                quantity: req.body.quantity,
            },

          

            _cart: req.userData.cart,
            //total_amount: product.price * req.body.quantity

        }

        toAddObj.sub_total= toAddObj.product.price * req.body.quantity;
        toAddObj.total_amount = toAddObj.sub_total+ totalAmount;
        console.log('toAddObj', toAddObj)

        
        if (panier && panier._cart == req.userData.cart) {


            //let totalAmount = panier.total_amount;
            panierProduct = panier.product;
            for (let i = 0; i < panierProduct.length; i++) {
                totalAmount += panierProduct[i].sub_total;
            }
            //panier.total_amount = total_amount;
            console.log("panier.total_amount", totalAmount)



            let cartDetailID = panier._id;
            let newAddedProduct = await cartDetailModel.pushProduct(
                cartDetailID,
                toAddObj.product._id,
                toAddObj.product.product_name,
                toAddObj.product._category,
                toAddObj.product.price,
                toAddObj.product.picture,
                toAddObj.product.quantity
            );

            panierProduct = panier.product;
            for (let i = 0; i < panierProduct.length; i++) {
                totalAmount += panierProduct[i].price * panierProduct[i].quantity;
            }

            let newTotal = await cartDetailModel.updateTotal(
                cartDetailID,
                totalAmount
            );

            console.log(newAddedProduct);
            res.json({
                newAddedProduct
            });
        } else {


            let newAddedProduct = await cartDetailModel.create(toAddObj);
            console.log('new cart is created');
            console.log(newAddedProduct);
            res.json({
                newAddedProduct
            });
        }


    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }

}

async function deleteCartproduct(req, res) {
    try {
        let id =req.params.id;
        console.log('deleting a product');
        let panier = await cartDetailModel.byCart(req.userData.cart);
        let products = panier.product;
        console.log('products',products)
        let deletedProduct = await cartDetailModel.delete(id,products);
        console.log('product is deleted');
        console.log(deletedProduct);
        res.json({
        deletedProduct
        });
        

        
        // console.log('req.params.id',req.params.id);
        // let deleteIndex = null;
        // let panier = await cartDetailModel.byCart(req.userData.cart);
        // console.log('panier',panier)
        // let products = panier.product;
        // for (let i=0;i<products.length;i++) {
        //     console.log('products[i]',products[i])
        //     if (products[i]._id ==req.params.id) {
        //         deleteIndex = i; 
        //         console.log('products[i]._id',products[i]._id)
                         
        //     }
        // }
        // if (deleteIndex == null) {
        //     throw "product not found found";
        // }
       
        // else {
           
        //     products.splice(deleteIndex, 1);
 
           
        
        //     //res.status(200).end(true);
        //     res.json(true)  
        // }
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

