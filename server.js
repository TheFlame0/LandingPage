const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const SupabaseService = require('./supabaseService.js');

const supabaseService = new SupabaseService();
// Serve static files (like supabaseService.js, images, CSS, etc.)
app.use(express.static(path.join(__dirname)));
app.use(express.json());  // <---- Add this!


// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
// API route to handle signup
app.post('/signup', async (req, res) => {
  const { email, name } = req.body;

  try {
    const data = await supabaseService.signUp(email, name);
    res.json({ message: 'Signup successful', data });
  } catch (error) {
    res.status(500).json({ error: 'Signup failed' });
  }
});app.post('/signup', async (req, res) => {
    const { email, name } = req.body;
  
    try {
      const data = await supabaseService.signUp(email, name);
      res.json({ message: 'Signup successful', data });
    } catch (error) {
      res.status(500).json({ error: 'Signup failed' });
    }
  });

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
