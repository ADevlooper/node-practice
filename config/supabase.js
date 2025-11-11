const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://eyaeudijksraerjjnhxd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5YWV1ZGlqa3NyYWVyampuaHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MzA0MzMsImV4cCI6MjA3ODMwNjQzM30.5b5o0CgDok5BFEGC4x2XjhkfQs0_nOYy7T6m3u8Z6cA';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;
