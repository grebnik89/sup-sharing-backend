const dates = require("../models/dates");
//const normalizeToObject = require("../utils/normalize/normalize");

const findAllDates = async (req, res, next) => {
    if (req.query["month.name"]) {
        const dataArray = await dates.findDatesByMonth(req.query["month.name"]);
        req.normalizedDataObject = dataArray;
        next();
        return;
    }

    const dataArray = await dates.find({}, { _id: 0, user: 0 }).populate("month"); // тут тоже не хотят популэйтиться месяцы
    req.normalizedDataObject = dataArray;
    //req.normalizedDataObject = await normalizeToObject(dataArray);
    next();
};

module.exports = { findAllDates };
