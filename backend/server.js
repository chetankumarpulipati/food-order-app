const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect("mongodb+srv://chetankumarpulipati4:ULR0bshMkM5o8e39@fooddelivery.sygo0ur.mongodb.net/?retryWrites=true&w=majority&appName=foodDelivery", {
}).then(() => {
    console.log("Connected to MongoDB Atlas");
}).catch((error) => {
    console.error("Error connecting to MongoDB Atlas", error);
});

// Define the Order schema
const OrderSchema = new mongoose.Schema({
  itemName: String,
  itemPrice: Number,
  quantity: Number,
});

const Order = mongoose.model('Order', OrderSchema);

app.use(cors());

app.use(bodyParser.json());

app.post('/test/orders', async (req, res) => {
  const { itemName, itemPrice, quantity } = req.body;

  const order = new Order({
    itemName,
    itemPrice,
    quantity,
  });

  try {
    await order.save();
    res.send(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/',async (req, res) => { 
  res.send('Server Status: Ok!');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});