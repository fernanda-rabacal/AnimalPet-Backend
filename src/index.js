require('dotenv').config();
const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();
const rotas = require('./routes');
app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(rotas);

app.listen(port, () => console.log(`Listening on port ${port}`));