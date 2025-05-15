// Mock user database
const users = [];

const register = (req, res) => {
  const { username, password } = req.body;
  
  // Check if user exists
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  // Add new user (in real app, you would hash the password)
  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully' });
};

const login = (req, res) => {
  const { username, password } = req.body;
  
  // Find user
  const user = users.find(user => user.username === username);
  
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // In real app, you would return a JWT token
  res.json({ message: 'Login successful' });
};

module.exports = { login, register };