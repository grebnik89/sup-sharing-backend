const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
    },
    isAgreeToPromotion: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model("user", userSchema);
