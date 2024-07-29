const express = require("express");
const connectToDatabase = require("./database/connect");
const datesRouter = require("./routes/dates");
const cors = require("./middlewares/cors");

const { PORT = 3001 } = process.env;
const app = express();

connectToDatabase();

app.use(cors, datesRouter);

app.listen(PORT, () => console.log(`Server is running at PORT http://localhost:${PORT}`));
