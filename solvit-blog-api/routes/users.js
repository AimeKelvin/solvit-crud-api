const router = require('express').Router();
const auth = require('../middleware/auth');
const role = require('../middleware/roleCheck');
const {
  getAllUsers, getUser, updateUser, deleteUser,
} = require('../controllers/userController');

router.get('/', auth, role('admin'), getAllUsers);
router.get('/:id', auth, getUser);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, role('admin'), deleteUser);

module.exports = router;
