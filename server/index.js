// backend/src/index.js
const express = require('express');
const { trainRoutes } = require('./routes/trainRoutes');
const app = express();
const PORT = process.env.SERVERPORT || 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the MapMyFood!');
});

app.use('/api/train', trainRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
