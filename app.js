require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const PORT = process.env.PORT || 3000;

app.use(logger);
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => res.json({ ok: true, msg: 'Server running' }));

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

module.exports = app;
