const Category = require('../models/Category');

exports.getAll = async (req, res) => res.json(await Category.find());
exports.getOne = async (req, res) => res.json(await Category.findById(req.params.id));
exports.create = async (req, res) => res.json(await Category.create(req.body));
exports.update = async (req, res) =>
  res.json(await Category.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.delete = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Category deleted' });
};
