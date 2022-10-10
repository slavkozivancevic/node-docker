const express = require('express');

const postController = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// router.get('/', postController.getAllPosts);
// router.get('/', postController.createPost);
// router.get('/:id', postController.getOnePost);
// router.patch('/:id', postController.updatePost);
// router.delete('/:id', postController.deletePost);

router.route('/')
    .get(protect, postController.getAllPosts)
    .post(protect, postController.createPost);

router.route('/:id')
    .get(protect, postController.getOnePost)
    .patch(protect, postController.updatePost)
    .delete(protect, postController.deletePost);

module.exports = router;