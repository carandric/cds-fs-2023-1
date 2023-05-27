const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/db_moreuse";

const conn = async () => {
  await mongoose.connect(uri);
  console.log('MongoDB Connection successful!');
}
conn().catch(error => console.error('Error connecting with MongoDB', error));
