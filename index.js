const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//Middleware
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 6000, () => {
      console.log(`Server started at port ${process.env.PORT || 6000}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
