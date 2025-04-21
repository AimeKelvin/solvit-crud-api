const router = require('express').Router();
const auth = require('../middleware/auth');
const role = require('../middleware/roleCheck');
const {
  getAll, getOne, create, update, delete: deleteCat
} = require('../controllers/categoryController');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', auth, role('admin'), create);
router.put('/:id', auth, role('admin'), update);
router.delete('/:id', auth, role('admin'), deleteCat);

module.exports = router;
