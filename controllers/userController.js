const User = require('../models/userModel');

exports.getUsers = (req, res) => {
  res.json(User.getAllUsers());
};

exports.addUser = (req, res) => {
  const newUser = req.body;
  User.addUser(newUser);
  res.json({ message: 'User added successfully', user: newUser });
};
