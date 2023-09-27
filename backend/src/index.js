const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv').config();
require('./database')
const PORT = process.env.PORT || 8000;

app.set('port', PORT)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen:'*'}))

app.use('/products',require('./routes/products.routes'))
app.use('/sales',require('./routes/sales.routes'))
app.use("/", (req, res) => res.send("Welcome 🫡 - APP ShopCart API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => {
    console.log(`Server started on port: http://localhost:${PORT}`)
})
