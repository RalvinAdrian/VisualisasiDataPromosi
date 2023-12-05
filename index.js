import mysql from "mysql";
import express from "express";

const PORT = 8080;
const app = express();
app.use(express.json());
app.listen(PORT);

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbmanpro2",
});

const dbConnect = () => {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, conn) => {
        if (err) reject(err);
        resolve(conn);
      });
    });
  };

  const sqlQuery = async (sql, data) => {
    const conn = await dbConnect();
  
    const res = new Promise((resolve, reject) => {
      conn.query(sql, data, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  
    conn.release();
  
    return res;
  };

  app.get("/", (req, res) => {
    res.send();
  });