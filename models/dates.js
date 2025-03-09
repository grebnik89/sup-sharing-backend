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
    return this.find({}, { _id: 0 }).populate("month", { _id: 0 }).populate("user", { _id: 0 }); // подключаем данные пользователей и месяцы, исключаем _id
};

module.exports = mongoose.model("dates", datesSchema);
