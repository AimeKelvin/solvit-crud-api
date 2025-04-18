const productService = require('../services/product.service');

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) return res.status(404).json({ error: 'Not found' });
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const updated = await productService.updateProductById(req.params.id, req.body);
        if (!updated) return res.status(404).json({ error: 'Not found' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deleted = await productService.deleteProductById(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Not found' });
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { createProduct, deleteProduct, updateProduct, getAllProducts, getProduct };