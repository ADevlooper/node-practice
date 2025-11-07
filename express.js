const express = require('express');
const app = express();
const PORT = 5000;


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  res.send(`User ${username} logged in`);
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ID is ${userId}` });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
