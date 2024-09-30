// backend/src/index.js
const express = require('express');
const app = express();
const PORT = process.env.SERVERPORT || 5000;

app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from the MapMyFood!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
