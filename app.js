const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(logger); 
app.set('view engine', 'ejs');
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => res.render('index'));

app.listen(3002, () => console.log('Server running on port 3002'));



module.exports = app;