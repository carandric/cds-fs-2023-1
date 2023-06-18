const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    clotheId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "clothes", //Referencia a la colección de prendas
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users", //Referencia a la colección de usuarios
    },
    buyerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users", //Referencia a la colección de usuarios
    },
    salePrice: {
      type: Number,
      required: true,
    },
    detail: String,
    date: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      default: 1,
    },
    isRemoved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("orders", OrderSchema);

module.exports = Order;
