const dates = require("../models/dates");
const normalizeToObject = require("../utils/normalize/normalize");

const findAllDates = async (req, res, next) => {
    const dataArray = await dates.find({}, { _id: 0, user: 0 });
    req.normalizedDataObject = await normalizeToObject(dataArray);
    next();
};

module.exports = { findAllDates };
