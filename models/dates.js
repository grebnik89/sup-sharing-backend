const mongoose = require("mongoose");

const userModel = require("./users");

const datesSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true, // является ли поле обязательным для заполнения
    },
    count: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel,
    },
});

module.exports = mongoose.model("dates", datesSchema);
