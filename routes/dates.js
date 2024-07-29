const datesRouter = require("express").Router();

const { sendAllDates } = require("../controllers/dates");
const { findAllDates } = require("../middlewares/dates");

datesRouter.get("/api/dates", findAllDates, sendAllDates);

module.exports = datesRouter;
