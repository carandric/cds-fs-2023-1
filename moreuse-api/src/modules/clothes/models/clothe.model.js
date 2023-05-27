const mongoose = require("mongoose");
const {Schema} = mongoose;

const ClotheSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    target: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users' //Referencia a la colección de usuarios
    },
    image: {
      type: String,
      required: true
    },
    description: String,
    status: {
      type: String,
      default: 1
    },
    isRemoved:{
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const Clothe = mongoose.model("clothes", ClotheSchema);

module.exports = Clothe;
