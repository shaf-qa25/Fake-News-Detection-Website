const express = require('express');
const app = express();
require('dotenv').config();
const cors= require('cors');
const bodyParser = require('body-parser');
require('./Models/db')
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

const PORT = parseInt(process.env.PORT, 10) || 8000;

app.get('/ping', (req, res) => {
    console.log('ping-pong');
    res.status(200).json({ message: 'pong', port: PORT });
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
