const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

// get all posts
router.route('/posts').get(PostController.getPosts);

// get single post
router.route('/posts/:id').get(PostController.getSinglePost);

// add posts
router.route('/posts').post(PostController.addPost);

// edit posts
router.route('/posts/:id').post(PostController.editPost);

// delete post
router.route('/posts/:id').delete(PostController.deletePost);

// get posts by range
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);

module.exports = router;