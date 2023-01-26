const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const pokemonRoutes = require("./routes/pokemon");
//settings
const app = express();
const port = process.env.PORT || 3000;
const whiteList = [
  "http://localhost:5173", //default port assigned by yarn
  "http://127.0.0.1:5173",
];

const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed"));
    }
  },
};

//middlewares
app.use(express.json());
app.use(cors(options));
app.use("/api/v1", pokemonRoutes);
//routes
app.get("/", (req, res) => {
  res.send("welcome to my API");
});

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("conected to db atlas"))
  .catch((err) => console.error(err));

//server listening
app.listen(port, () => console.log("server listening on port,", port));
