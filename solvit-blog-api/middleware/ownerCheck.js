const Blog = require('../models/Blog');

module.exports = async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ msg: 'Blog not found' });

  if (blog.author.toString() !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Not authorized' });
  }

  req.blog = blog;
  next();
};
