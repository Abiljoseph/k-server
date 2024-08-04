import express from "express";

// const users = require("./routes/users.routes");
import AuthRoutes from "./routes/auth.routes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://abiljoseph98p:abiljoseph12345@cluster0.llh9onx.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

//
app.use("/auth", AuthRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
