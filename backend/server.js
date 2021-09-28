const express = require("express");
const app = express();
const port = 3005;
const cors = require("cors");

const morgan = require("morgan");
const helmet = require("helmet");
app.use(cors());
app.use(helmet());

app.use(morgan("tiny"));
// body parser
app.use(express.urlencoded({ extended: true }));
// json parser
app.use(express.json());
// routes of the app
app.use("/api", require("./routes"));
// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(3005, () => {
  console.log("server on port 3005");
});
