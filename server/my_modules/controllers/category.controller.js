const express = require('express');
const router = express.Router();
module.exports = router;

// load users schema
const categoryModel = require('./../models/Category.model');

// create web token
const jwt = require('jsonwebtoken');
// logged check middleware
//const checkAuth = require('../../jwt_middleware');
// bcrypt password controlle
const pwd = require('../../utilitaire/bcrypt');

// user api routes
router.get('/', getAllCategories);
router.get('/:category_name([A-Z a-z]+)', getCategoryByName);
router.get('/:id([0-9 a-z]+)', getCategoryById);




async function getAllCategories(req, res) {
    try {
        let categories = await categoryModel.all();
        res.json(categories);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

async function getCategoryById(req, res) {
    try {
        let id = req.params.id;
        console.log(id)
        let category = await categoryModel.byCategoryId(id);
        res.json(category);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

async function getCategoryByName(req, res) {
    try {
        let categoryName = req.params.category_name;
        console.log(categoryName);
        let category = await categoryModel.byCategoryName(categoryName);
        res.json(category);
    } catch (e) {
        console.log(e);
        res.status(400).send('bad request');
    }
}

