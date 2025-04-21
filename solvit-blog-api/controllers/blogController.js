const Blog = require('../models/Blog');

exports.getAll = async (req, res) => res.json(await Blog.find().populate('author category'));
exports.getOne = async (req, res) => res.json(await Blog.findById(req.params.id));
exports.getByCategory = async (req, res) => {
  const blogs = await Blog.find({ category: req.params.categoryId }).populate('author');
  res.json(blogs);
};

exports.create = async (req, res) => {
  const blog = await Blog.create({ ...req.body, author: req.user._id });
  res.json(blog);
};

exports.update = async (req, res) => {
  Object.assign(req.blog, req.body);
  await req.blog.save();
  res.json(req.blog);
};

exports.delete = async (req, res) => {
  await req.blog.remove();
  res.json({ msg: 'Blog deleted' });
};
