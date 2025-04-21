const User = require('../models/User');
const { generateToken } = require('../utils/jwtHelper');

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ msg: 'Username already exists' });

    const user = await User.create({ username, password, role });
    const token = generateToken(user._id);

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = generateToken(user._id);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};
