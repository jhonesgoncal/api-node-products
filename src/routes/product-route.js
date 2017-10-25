'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/', controller.post); 
router.get('/:slug', controller.getBySlug); 
router.get('/', controller.get);
router.put('/:id', controller.put); 
router.delete('/', controller.delete);

module.exports = router;