const dates = require("../models/dates");

const findAllDates = async (req, res, next) => {
    req.datesArray = await dates.find({}, { _id: 0, user: 0 });
    next();
};

module.exports = { findAllDates };
