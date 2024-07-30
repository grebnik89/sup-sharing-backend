const normalizeToObject = async (dataArray) => {
    let dataObject = {};
    for ({ date, count } of dataArray) {
        dataObject[date]
            ? (dataObject[date] = Number(dataObject[date]) + Number(count))
            : (dataObject[date] = Number(count));
    }
    return dataObject;
};

module.exports = normalizeToObject;
