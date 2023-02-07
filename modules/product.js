const mongoose = require("mongoose");
const {model,Schema} = mongoose;

const productSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        rating:{
            type: Number,
            required: true
        },
        reviewCount:{
            type: Number,
            required: true
        },
        about:{
            type: String,
            required: true
        },
        available:{
            type: Boolean,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        SKU:{
            type: String,
            required: true
        },
        company:{
            type: String,
            required: true
        },
        images:{
            type: Array,
            required: true
        }
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt"
        }
    }
);

module.exports = model("product", productSchema);