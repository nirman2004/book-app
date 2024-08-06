const express = require("express");
const cors = require("cors");
const app =express();
require("dotenv").config();
require("./connection/connection");
const User = require("./routes/user.js");
const Books = require("./routes/book.js")
const Favourite = require("./routes/favourite.js")
const Cart = require("./routes/cart.js")
const Order = require("./routes/order.js")
app.use(cors())
app.use(express.json());

app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.listen(process.env.PORT,()=>{
    console.log(`Server Started ${process.env.PORT}`);
});