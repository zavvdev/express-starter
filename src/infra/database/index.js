import pg from "pg";
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from "./config.js";

var pool = new pg.Pool({
  user: DB_USER,
  password: DB_PASS,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
});

export var db = {
  query: (text, params) => pool.query(text, params),
};
