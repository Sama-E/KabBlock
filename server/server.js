import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./services/auth/routes/auths.js";
import blogRoutes from "./services/blog/routes/posts.js";

const app = express();

//Middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cors({origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/posts", blogRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});