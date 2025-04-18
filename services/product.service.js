const Product = require('../models/Product');

const createProduct = async (productData) => {
    return await Product.create(productData);
};

const getAllProducts = async () => {
    return await Product.find();
};

const getProductById = async (id) => {
    return await Product.findById(id);
};

const updateProductById = async (id, productData) => {
    return await Product.findByIdAndUpdate(id, productData, { new: true });
};

const deleteProductById = async (id) => {
    return await Product.findByIdAndDelete(id);
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
};