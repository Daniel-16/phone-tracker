const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//Middleware
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Daniel:Oloruntoba123@cluster0.ws6qroq.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(process.env.PORT || 6000, () => {
      console.log(`Server started at port ${process.env.PORT || 6000}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
