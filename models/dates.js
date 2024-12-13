const mongoose = require("mongoose");

const userModel = require("./users");
const monthModel = require("./monthes");

const datesSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true, // является ли поле обязательным для заполнения
    },
    count: {
        type: String,
        required: true,
    },
    month: {
        type: mongoose.Schema.Types.ObjectId,
        ref: monthModel,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel,
    },
});

datesSchema.statics.findAllDates = function () {
    return this.find({}, { _id: 0 }).populate("month").populate("user"); // подключаем данные пользователей и месяцы
};

module.exports = mongoose.model("dates", datesSchema);
