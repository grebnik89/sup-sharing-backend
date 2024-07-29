const dates = require("../models/dates");

const findAllDates = async (req, res, next) => {
    req.datesArray = await dates.find({}).populate({ path: "user", select: "-phone" });
    next();
};

module.exports = { findAllDates };
