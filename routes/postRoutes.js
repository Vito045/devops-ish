const express = require('express');

const {
  getAllPosts,
  createPost,
  getOnePost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);
router.route('/').get(getAllPosts).post(protect, createPost);
router.route('/:id').get(getOnePost).patch(updatePost).delete(deletePost);

module.exports = router;
