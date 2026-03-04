const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to your first Express app 🔥');
});

app.get('/api/android', (req, res) => {
  res.json({ 
    success: true,
    statusCode: 200,
    message: 'Android API endpoint hit',
    data: { version: '12.0', codename: 'Snow Cone' } 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});