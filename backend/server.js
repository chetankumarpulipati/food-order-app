const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


const userSchema = new mongoose.Schema({            // Schema
  name: String
});
const User = mongoose.model('User', userSchema, 'users');  //collection creation
mongoose.connect('mongodb://localhost:27017/foodorder-app', {}); // database name(foodorder-app)

app.get('/', (req, res) => {          // express server status
    res.send('Server Status OK');    
});

app.get('/status', (req, res) => {    // mongodb connection status
  let state = mongoose.connection.readyState;
  if(state === 1) {
    res.send('Connected to MongoDB');
  } else {
    res.send('Not connected to MongoDB');
  }
});

app.post('/addUser', async (req, res) => {   //post method to add name of the user
    const newUser = new User({
      name: "chetan"
    });
  
    try {
      await newUser.save();
      console.log("User added successfully.");
      res.send('User added successfully');
    } catch (error) {
      console.log(error);
      res.send('Failed to add user to database');
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});