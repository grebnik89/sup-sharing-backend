const sendAllDates = (req, res) => {
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(req.dataArray));
};

module.exports = { sendAllDates };
