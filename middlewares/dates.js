const dates = require("../models/dates");
const normalizeToObject = require("../utils/normalize");

const findAllDates = async (req, res, next) => {
    const dataArray = await dates.findAllDates(); //получаем все даты бронирований

    if (req.query["month.name"]) {
        req.dataArray = dataArray.filter((obj) => obj.month.name === req.query["month.name"]); // фильтруем по месяцам
        next();
        return;
    }

    // тут отдаем все даты, если нет запроса по месяцам
    req.dataArray = dataArray;
    next();
};

module.exports = { findAllDates };
