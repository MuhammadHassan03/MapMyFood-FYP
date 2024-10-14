const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./services/db');
const { authRouter } = require('./routes/authroutes');
const { trainRoutes } = require('./routes/trainRoutes');
const { restaurantRouter } = require('./routes/restaurantRoutes');

const corsOptions = {
  origin: '*', // Allows all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allow common methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Add other headers if needed
  credentials: true // Include credentials if necessary
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));
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
app.use('/api/restaurant', restaurantRouter)

const PORT = 9000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
