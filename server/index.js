import bodyParser from "body-parser";
import Express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: "../dotenv/key.env" });
const app = Express();
import postRoutes from "./routes/post.js";
import authRoutes from "./routes/auth.js";

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", authRoutes);
let url = process.env.MONGO_KEY;
const port = process.env.port || 5000;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log("Server is running"));
  })
  .catch((err) => {
    console.log(err.message);
  });

// mongoose.set("useFindAndModify", false);
