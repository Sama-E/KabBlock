import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./services/auth/routes/auths.js";
import blogRoutes from "./services/blog/routes/posts.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/posts", blogRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});