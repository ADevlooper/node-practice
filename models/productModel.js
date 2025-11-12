const supabase = require('../config/supabase');

const table = 'practice'; 

async function findAll() {
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .order('product_id', { ascending: true }); 
  if (error) throw error;
  return data;
}

async function findById(id) {
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('product_id', id)
    .single();
  if (error) throw error;
  return data;
}

async function create(payload) {
  const { data, error } = await supabase.from(table).insert([payload]).select();
  if (error) throw error;
  return data[0];
}

async function updateById(id, payload) {
  const { data, error } = await supabase
    .from(table)
    .update(payload)
    .eq('product_id', id) 
    .select();
  if (error) throw error;
  return data[0];
}

async function deleteById(id) {
  const { data, error } = await supabase
    .from(table)
    .delete()
    .eq('product_id', id) 
    .select();
  if (error) throw error;
  return data;
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  deleteById,
};
