const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

//file imports
const connectDB = require("./config/dbConfig");
const storeRouter = require("./routes/storeRoute");
const operationsRouter = require("./routes/operationsRoute");

//config
dotenv.config();

//middleware
app.use(express.json());
app.use(cors());

//API routes
app.use("/api/v1/store", storeRouter);
app.use("/api/v1/operations", operationsRouter);

//Default route
app.get("/", (req, res) => {
  res.status(200).send(`<h1>Welcome to Mobilisis Api Server 🚀</h1>`);
});

//DB Connection
const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server on port:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
