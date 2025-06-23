const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/create-or-update', async (req, res) => {
  const { uid, name, bio, avatar } = req.body;
  try {
    let user = await User.findOneAndUpdate({ uid }, { name, bio, avatar }, { upsert: true, new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// routes/users.js


router.get('/', (req, res) => res.send('Users route works'));

module.exports = router;

module.exports = router;
