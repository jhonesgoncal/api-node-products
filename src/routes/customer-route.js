'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

router.post('/', controller.post); 
router.get('/:id', controller.getById);
router.get('/', controller.get);
router.put('/:id', controller.put); 
router.delete('/:id', controller.delete);

module.exports = router;