const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password]
    );

    if (result.rows.length > 0) {
      res.send('Login successful!');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).send('Server error. Please try again later.');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});