import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv';

import authRoutes from "./services/auth/routes/auths.js";
import blogRoutes from "./services/blog/routes/posts.js";

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.CHATGPT_SECRET_KEY,
})

const openai = new OpenAIApi(configuration);

const app = express();

//MIDDLEWARE
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cors({origin: "http://localhost:5173", withCredentials: true }));
app.use(cookieParser());

//UPLOAD - MULTER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

//ROUTES

//ChatGPT
app.post('/api/chatgpt', async(req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).send({
      bot: response.data.choices[0].text
    })
    } catch (error) {
      console.log(error);
      res.status(500).send({ error })
  }
})

//Upload
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

//Auth
app.use("/api/auth", authRoutes);

//Blog Posts
app.use("/api/posts", blogRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});