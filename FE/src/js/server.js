const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const session = require('express-session'); // For session management
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // For development, use false, set true in production with HTTPS
}));

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Your MySQL password here
  database: 'msib_rubiks', // Database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Route to handle user registration
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).send('All fields are required.');
  }

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) throw err;

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).send('Error registering user.');
      }
      res.status(200).send('User registered successfully!');
    });
  });
});

// Route to handle user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required.');
  }

  // Query to find the user by username
  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching user data.');
    }

    if (results.length === 0) {
      return res.status(401).send('User not found.');
    }

    const user = results[0];

    // Compare the hashed password with the stored password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).send('Error comparing passwords.');
      }

      if (!isMatch) {
        return res.status(401).send('Incorrect password.');
      }

      // Store user in session after successful login
      req.session.user = user;

      // Successful login
      res.status(200).send('Login successful!');
    });
  });
});

// Add this route to fetch user details from session
app.get('/getUser', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send('User not authenticated.');
  }

  // Return the logged-in user's details
  res.json({ username: req.session.user.username });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
