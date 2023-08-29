import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_LOCALHOST,
  user: process.env.DB_USER,
  password: process.env.DB_KEY,
  database: process.env.DB_DATABASE_NAME
})