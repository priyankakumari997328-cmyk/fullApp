

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { sql, connectDB } = require("./db");

const app = express();

app.use(cors());
app.use(express.json());


connectDB();


app.get("/", async (req, res) => {
  try {
  
    const result = await sql.query("SELECT * FROM users");

  
    res.json(result.recordset);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Database Error",
      error: err.message,
    });
  }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});