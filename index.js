const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use("/users", require("./routes/users"));

app.listen(9000, console.log("app listening on port 9000"));
