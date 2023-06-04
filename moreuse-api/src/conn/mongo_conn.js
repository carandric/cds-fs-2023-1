const mongoose = require("mongoose");

const uri = process.env.MONGO_DB;

const conn = async () => {
  await mongoose.connect(uri);
  console.log('MongoDB Connection successful!');
}
conn().catch(error => console.error('Error connecting with MongoDB', error));
