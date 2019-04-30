const express = require('express');
const router = express.Router();
module.exports = router;
const multer = require('multer');
const path = require('path');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.' + file.originalname);
        //cb(null, `${new Date().toISOString().replace(/:/g, '-')}${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
    
});

// load users schema
const productModel = require('./../models/Product.model');
const cartDetailModel = require('./../models/CartDetail.model');


// create web token
const jwt = require('jsonwebtoken');
// logged check middleware
const checkAuth = require('../../utilitaire/jwt_middleware');
// bcrypt password controlle
const pwd = require('../../utilitaire/bcrypt');

// user api routes
//shopping/api/products
//router.post('/add/:id/:quantity',checkAuth ,  ajouterProduit);
router.get('/', getAllProducts);
router.get('/count', getCountProducts);
router.get('/:category([0-9 a-z]+)', getProductsByCategory);
router.get('/:id([0-9 a-z]+)', getProduct);

// router.put('/',checkAuth,upload.single('picture'), editProduct);

//router.put('/update/:id([0-9 a-z]+)', updateCart);
//router.put('/push-product/:id([0-9 a-z]+)', checkAuth, pushToCart);
router.post('/',checkAuth, upload.single('picture'), addNewProduct);
router.put('/',checkAuth, upload.single('picture'), editProduct);







async function addToCart(req, res) {
    try {
        let productId = req.params.id;
        let product = await productModel.byId(productId);


        let toAddObj = {
            product: {
                _id: productId,
                product_name: product.product_name,
                _category: product._category._id,
                price: product.price,
                picture: product.picture,
                quantity: 77,
                sub_total: 77
            },
            total_amount: 77,
            _cart: req.userData.cart

        }



        let newAddedProduct = await cartDetailModel.create(toAddObj);
        console.log('new cart is created');
        res.json(newAddedProduct);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

async function updateCart(req, res) {
    try {
        let productId = req.params.id;
        let product = await productModel.byId(productId);

        let cartDetailID = "5b5d18035e155f4d3e8d3aef";
        let newAddedProduct = await cartDetailModel.update(cartDetailID, 333, 444, 777);
        console.log(newAddedProduct);
        res.json({
            newAddedProduct
        });
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

// async function pushToCart(req, res) {
//     try {
//         let productID = req.params.id;
//         let product = await productModel.byId(productID);
//         let toAddObj = {
//             product: {
//                 _id: productID,
//                 product_name: product.product_name,
//                 _category: product._category._id,
//                 price: product.price,
//                 picture: product.picture,
//                 quantity: 45,
//                 sub_total: 784
//             }
//         }

//         //let cartDetailID =  req.userData.cartDetail;
//         let newAddedProduct = await cartDetailModel.pushProduct(cartDetailID,
//             productID,
//             toAddObj.product.product_name,
//             toAddObj.product._category,
//             toAddObj.product.price,
//             toAddObj.product.picture,
//         );
//         console.log(newAddedProduct);
//         res.json({
//             newAddedProduct
//         });
//     } catch (e) {
//         console.log(e);
//         res.status(400).send('bad request');
//     }
// }



async function getAllProducts(req, res) {
    try {
        let products = await productModel.all();
        res.json(products);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

async function getCountProducts(req, res) {
    try {
        let products = await productModel.countProducts();
        res.json(products);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

async function getProductsByCategory(req, res) {
    try {
         let categoryId = req.params.category;
         console.log(categoryId)
        let products = await productModel.byCategory(categoryId);
        res.json(products);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

async function getProduct(req, res) {
    try {
        let productId = req.params.id;
        let product = await productModel.byId(productId);
        res.json(product);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

async function addNewProduct(req ,res) {

    try {
        
        // -CREATE THE NEW PRODUCT ACCORDING TO THE DATA PROVIDED BY THE USER
        //if (!req.file) return res.send('Please upload a file')
        console.log('req.file', req.file);
        //console.log('req.body',req.body)
        //console.log(JSON.stringify(req))
        let pathPicture = req.file.path.replace(/\\/g, "/");
        //let pathPicture = req.file.path;

        // console.log(req.body); // return full value
        // console.log(req.files); // return full value

        let createObj = {
            product_name: req.body.productName,
            _category: req.body.category,
            price: req.body.price,
            picture: pathPicture
            //alert("/46\\465531_Thumbnail.jpg".replace(/\\/g,"/"));

        }
        console.log(createObj);

        // - IF ONE OF THE REQUIRED FIELDS IS EMPTY ,SHOW ERROR
        if (!createObj.product_name ||
            !createObj._category ||
            !createObj.price ||
            !createObj.picture) {
            throw "Create product missing details";

        }
        // -IF THE PRODUCT EXISTS,SHOW ERROR
        if (await productModel.byProductName(createObj.product_name) != null) {
            throw "Create product productName exists";
        }


        // -INSERT THE NEW UPRODUCT TO THE DB
        let newProduct = await productModel.create(createObj);

        // -SET RESULT OBJECT WITH PRODUCT DETAILS 
        let result = {
            product: {
                id: newProduct._id,
                product_name: newProduct.product_name,
                _category: newProduct.category,
                price: newProduct.price,
                picture: newProduct.picture,

            }
        }
        // -SHOW RESULT
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(403).end();
    }
}

/////////////////////////////////////////////////////////////////////////////



async function editProduct(req, res) {
    let id = req.body.updateProductId;
    if (req.userData.role != "Admin") {
        res.status(403).end();
    } else {
        try {
               console.log('req.file', req.file);
            let pathPicture = req.file.path.replace(/\\/g, "/");
            let updateObj = {
                _id: id,
                product_name: req.body.product_name,
                _category: req.body._category,
                price: req.body.price,
                picture: pathPicture
            }
           
           
            let product = await productModel.byId(id);
            if(!product) {
                throw `Edit product id not found ${id}`;                
            }
            if( product.product_name != updateObj.product_name) {
                if(await productModel.byProductName(updateObj.product_name) != null ) {
                    throw "Update product product_name taken";
                }
            }

            let p = await productModel.update(id,updateObj);
            console.log(p);

            let sendObj = true;
            res.json(sendObj);
        } catch (e) {
            console.log(e);
            res.status(400).send('bad request');
        }
    }
}
