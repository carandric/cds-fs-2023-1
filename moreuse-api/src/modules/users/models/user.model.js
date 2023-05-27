const mongoose = require("mongoose");
//Sequelize - OTRO ORM: SQL Server, Oracle, MySQL
const {Schema} = mongoose;

const UserSchema = new Schema (
  {
    name: String,
    phone: String,
    address: String,
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minLength: 6
    },
    isRemoved: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model ("users", UserSchema);

module.exports = User;
