const express = require('express');
const responseData = require('./response.json'); // Assuming you have a JSON file with response data
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to your first Express app 🔥');
});

app.get('/api/downloads', (req, res) => {
  res.json({ 
    success: true,
    statusCode: 200,
    message: 'Downloads API endpoint hit',
    data: responseData
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});