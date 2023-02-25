const { Schema } = require("mongoose");

const ProductSchema = new Schema(definition: {
    name: String,
    description: String,
    price: Number,
    category: String,
    picture: String,
})