const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./routes/index");
const mongoose = require("mongoose");
const cors = require("cors");

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

mongoose
  .connect(process.env.MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 7000, () => {
      console.log(`Server started at port ${process.env.PORT || 7000}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
