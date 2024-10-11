const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./services/db');
const authRouter = require('./routes/authroutes');

require('dotenv').config()
app.use(express.json());
app.use(cors());


connectDB();
app.use('/api/auth', authRouter);
// app.use('/api/train', trainRoutes);

const PORT = 6000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
