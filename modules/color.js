const mongoose = require("mongoose");
const {model,Schema} = mongoose;

const colorSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt"
        }
    }
);

module.exports = model("color", colorSchema);