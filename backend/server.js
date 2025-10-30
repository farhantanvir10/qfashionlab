const express = require('express');
const db = require('./config/db');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();

const sellerLogin = require('./routes/sellerLoginRoute');
const sellerProductUpload = require('./routes/sellerProductUploadRoute');

const PORT = process.env.PORT || 2005;

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});
app.use('/api/sellerLogin', sellerLogin);
app.use('/api/sellerProductUpload', sellerProductUpload);

app.listen(PORT, () => {
    db();
    console.log('Server is running on port:' + PORT);
});
