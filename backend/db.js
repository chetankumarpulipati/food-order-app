const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://chetankumarpulipati4:ULR0bshMkM5o8e39@fooddelivery.sygo0ur.mongodb.net/?retryWrites=true&w=majority&appName=foodDelivery", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
