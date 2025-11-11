let users = [
  { id: 1, name: 'Asar' },
  { id: 2, name: 'John' }
];


module.exports = {
  getAllUsers: () => users,
  addUser: (user) => users.push(user)
};
