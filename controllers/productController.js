const supabase = require('../config/supabase');

exports.getProducts = async (req, res) => {
  try {
    console.log("🟢 Connecting to Supabase...");

    const { data, error } = await supabase.from('practice').select('*');

    if (error) {
      console.error("🔴 Supabase Error:", error);
      return res.status(500).send("Supabase Error: " + error.message);
    }

    console.log("✅ Data fetched:", data);
    res.render('products', { products: data });
  } catch (err) {
    console.error("🔴 Server Error:", err);
    res.status(500).send("Server Error: " + err.message);
  }
};
