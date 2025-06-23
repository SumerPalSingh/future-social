const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
  userId: String,
  content: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
});
module.exports = mongoose.model('Post', PostSchema);
