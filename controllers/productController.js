
const Product = require('../models/productModel');


exports.getProducts = async (req, res) => {
  console.log("🟢 Controller reached: getProducts()");
  try {
    const products = await Product.findAll();
    console.log("✅ Products fetched:", products.length);
    res.render('products', { products }); 
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    res.status(500).send('Error fetching products');
  }
};


exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Not found' });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;
    if (!name || price == null) return res.status(400).json({ error: 'name and price required' });

    const payload = {
      name,
      price: Number(price),
      description: description || null,
      category: category || null,
      stock: stock != null ? Number(stock) : null
    };

    const created = await Product.create(payload);
    res.status(201).json(created);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;
    const payload = {};
    if (name !== undefined) payload.name = name;
    if (price !== undefined) payload.price = Number(price);
    if (description !== undefined) payload.description = description;
    if (category !== undefined) payload.category = category;
    if (stock !== undefined) payload.stock = Number(stock);

    const updated = await Product.updateById(req.params.id, payload);
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    await Product.deleteById(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
