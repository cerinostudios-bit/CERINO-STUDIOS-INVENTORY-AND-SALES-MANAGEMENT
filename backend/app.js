require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');

// Inisialisasi Express
const app = express();
app.use(cors());
app.use(express.json());

// Tes koneksi database
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Routing sederhana (placeholder)
app.get('/', (req, res) => {
  res.send('API CERINO Inventory & Sales Management');
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
