const router = require('express').Router();
const auth = require('../middleware/auth');
const owner = require('../middleware/ownerCheck');
const {
  getAll, getOne, create, update, delete: del, getByCategory,
} = require('../controllers/blogController');

router.get('/', getAll);
router.get('/:id', getOne);
router.get('/category/:categoryId', getByCategory);
router.post('/', auth, create);
router.put('/:id', auth, owner, update);
router.delete('/:id', auth, owner, del);

module.exports = router;
