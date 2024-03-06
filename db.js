const mongoose = require('mongoose');

// Replace <password> with your MongoDB Atlas password
const mongoURI = 'mongodb+srv://EthanMcMullen:oE9PpZGE4x7rl9F7@cluster0.eyajqey.mongodb.net';


  const connectToMongoDB = async (uri) => {
    try {
      await mongoose.connect(uri);
      console.log('Connected to MongoDB Atlas');
    } catch (err) {
      console.error('Error connecting to MongoDB Atlas:', err);
    }
  };

  connectToMongoDB(mongoURI)
  
module.exports = connectToMongoDB;