require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./services/db');
const { authRouter } = require('./routes/authroutes');
const { trainRoutes } = require('./routes/trainRoutes');
const { restaurantRouter } = require('./routes/restaurantRoutes');

// Enable Them For Production
const corsOptions = {
  origin: 'https://map-my-food.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions)); 

app.options('*', cors(corsOptions));


//Enable Them for Development
// app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from server',
  });
});

connectDB();
app.use('/api/auth', authRouter);
app.use('/api/train', trainRoutes);
app.use('/api/restaurant', restaurantRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
