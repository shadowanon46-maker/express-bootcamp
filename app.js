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

app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop Gaming', price: 15000000 },
    { id: 2, name: 'Mouse Wireless', price: 150000 }
  ];
  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
