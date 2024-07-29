const sendAllDates = (req, res) => {
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(req.datesArray));
};

module.exports = { sendAllDates };
