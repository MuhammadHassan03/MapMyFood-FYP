const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./services/db');
const { authRouter } = require('./routes/authroutes');
const { trainRoutes } = require('./routes/trainRoutes')

app.use(cors());
require('dotenv').config()
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from server'
  })
})

connectDB();
app.use('/api/auth', authRouter);
app.use('/api/train', trainRoutes);

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
