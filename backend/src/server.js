require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Backend DAMRI aktif'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server berjalan di ${PORT}`));
