import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";

import authRoutes from "./services/auth/routes/auths.js";
import blogRoutes from "./services/blog/routes/posts.js";

const app = express();

//Middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cors({origin: "http://localhost:5173", withCredentials: true }));
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

// const upload = multer({ dest: './uploads/' });

// app.post ('/api/upload', upload.single('file'), function (req, res){
//   res.status(200).json("Image uploaded");
// });

app.use("/api/auth", authRoutes);
app.use("/api/posts", blogRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});