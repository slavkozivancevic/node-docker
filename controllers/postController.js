const Post = require('../models/postModel');

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            status: 'success get all posts',
            results: posts.length,
            data: {
                posts
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail get all posts'
        });
    }
};

exports.getOnePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({
            status: 'success get one posts',
            data: {
                post
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail get one posts'
        });
    }
};

exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        res.status(200).json({
            status: 'success create post',
            data: {
                post
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail create post'
        });
    }
};

exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success update post',
            data: {
                post
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail update post'
        });
    }
};

exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success delete post'
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail delete post'
        });
    }
};