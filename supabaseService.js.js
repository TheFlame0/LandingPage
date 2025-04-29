// supabaseService.js
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey);

class SupabaseService {
  async signUp(email, name) {
    const { data, error } = await supabase
      .from('Early Access')
      .insert([{ Email: email, name: name }]);

    if (error) {
      console.error('Error inserting into Supabase:', error);
      throw error;
    }

    return data;
  }
}

module.exports = SupabaseService;


