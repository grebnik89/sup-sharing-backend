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

datesSchema.statics.findDatesByMonth = function (month) {
    return this.find({}, { _id: 0 }).populate("month").populate("user"); // понять почему юзер популэйтится, а месяцы - нет
    /* .then((dates) => {
            return dates; //.filter((date) => date.month === month);
        }); */
};

module.exports = mongoose.model("dates", datesSchema);
