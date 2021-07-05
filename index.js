const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, err => {
  if (err) throw err;
  console.log("Connected to mongodb")
});

const app = express();

app.use(express().json())
app.use(cors())

app.use("/menu", require(",/routes/menu"))

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log("App live on port " + port);
})
