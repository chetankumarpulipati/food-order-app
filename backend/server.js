const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db'); // Import your database connection

const app = express();

// Connect to MongoDB
connectDB();

// Enable CORS (if needed for your frontend)
app.use(cors());

// Parse incoming request body data
app.use(bodyParser.json());

const Order = require('./order'); // Import your Order model

// API endpoint to handle order placement
app.post('/api/orders', async (req, res) => {
  const { userId, restaurantId, items, totalPrice, deliveryAddress } = req.body;

  try {
    const newOrder = new Order({
      userId,
      restaurantId,
      items,
      totalPrice,
      deliveryAddress,
    });

    const savedOrder = await newOrder.save();

    res.json({ message: 'Order placed successfully!', order: savedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error placing order' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
