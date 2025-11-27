const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());


// ini belum selesai kodingannya. 
app.get('/', (req, res) => {
  res.json({ message: 'Welcome Express API' });
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Charlie', role: 'user' }
  ];
  res.json(users);
});


