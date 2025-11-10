const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');

app.use(logger); 
app.set('view engine', 'ejs');
app.use(express.json());
app.use('/users', userRoutes);

// app.get('/', (req, res) => res.render('index'));

app.listen(3000, () => console.log('Server running on port 3000'));



module.exports = app;