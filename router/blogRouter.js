const express = require('express')
// const Blog = require('../models/blog')
const blogController = require('../controllers/blogController')
const router = express.Router();

router.get('/blogs',blogController.blog_index)

router.get('/create',blogController.blog_create)

router.post('/blogs',blogController.blog_details_post)


router.get('/blogs/:id',blogController.blog_details)

router.delete('/blogs/:id',blogController.blog_destroy_post)

module.exports = router;