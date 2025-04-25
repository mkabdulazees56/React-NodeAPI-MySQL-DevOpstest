const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
const PORT = 9001;

app.use(cors());
app.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

let onConnect;

const connectWithRetry = () => {
  console.log("Attempting to connect to MySQL...");

  onConnect = mysql.createConnection(dbConfig);

  onConnect.connect((error) => {
    if (error) {
      console.error("MySQL connection error:", error);
      console.log("Retrying in 5 seconds...");
      setTimeout(connectWithRetry, 5000); // Retry connection after 5 seconds
    } else {
      console.log("Connected to MySQL successfully");
    }
  });
};

connectWithRetry();

app.get("/", (req, res) => {
  let sql = `SELECT * FROM users`;
  onConnect.query(sql, (error, result) => {
    if (error) {
      res.status(500).send(error.message);
      console.error(error.message);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post("/api/create", (req, res) => {
  try {
    let { name, email, work } = req.body;
    let sql = "INSERT INTO users SET ?";

    onConnect.query(sql, { name, email, work }, (error, result) => {
      if (error) {
        res.status(500).send(error.message);
        console.error(error.message);
      } else {
        res.status(200).send(result);
      }
    });
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error.message);
  }
});

app.get("/api/:id", (req, res) => {
  let sql = `SELECT * FROM users WHERE id = ?`;
  let id = req.params.id;
  onConnect.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
      console.error(err.message);
    } else {
      res.status(200).send(result);
    }
  });
});

app.put("/api/update/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, work } = req.body;
    let sql = `UPDATE users SET name = ?, email = ?, work = ? WHERE id = ?`;

    onConnect.query(sql, [name, email, work, id], (error, result) => {
      if (error) {
        res.status(500).send(error.message);
        console.error(error.message);
      } else {
        res.status(200).send(result);
      }
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/api/delete/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM users WHERE id = ?`;
  onConnect.query(sql, [id], (error, result) => {
    if (error) {
      res.status(500).send(error.message);
      console.error(error.message);
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(PORT, () =>
  console.log(`Server is listening at: http://localhost:${PORT}`)
);
