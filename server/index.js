const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());


const cookieSession = require('cookie-session');
app.use(cookieSession({
    secure: false,
    signed: false
}));


const authRouter = require('./router/authRouter.js');

app.use(authRouter);

const mongodb = mongoose.connect("mongodb+srv://priya_saw:o3KmaexTXnNdlwhL@cluster0.lw1ofgj.mongodb.net/userdata", (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log("database connection is succesful");
    }

});

const server = app.listen(port, () => {
    console.log(`server started at ${port}`)
})