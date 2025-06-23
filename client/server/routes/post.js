const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/create', async (req, res) => {
  const { userId, content, imageUrl } = req.body;
  const post = new Post({ userId, content, imageUrl });
  await post.save();
  res.json(post);
});

router.get('/feed', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.post('/like/:id', async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
  res.json(post);
});
module.exports = router;
