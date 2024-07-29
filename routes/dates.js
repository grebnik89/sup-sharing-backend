const datesRouter = require("express").Router();

const { sendAllDates } = require("../controllers/dates");
const { findAllDates } = require("../middlewares/dates");

datesRouter.get("/", findAllDates, sendAllDates);

module.exports = datesRouter;
