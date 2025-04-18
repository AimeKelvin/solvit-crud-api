const express = require('express');
const router = express.Router();
const { createProduct, deleteProduct, updateProduct, getAllProducts, getProduct } = require('../controllers/product.controller.js')

// Create
router.post('/', createProduct);

// Read All
router.get('/', getAllProducts);

// Read One
router.get('/:id',getProduct);

// Update
router.put('/:id', updateProduct);

// Delete
router.delete('/:id', deleteProduct);

module.exports = router;
