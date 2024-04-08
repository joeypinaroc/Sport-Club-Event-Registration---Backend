const express = require('express');
const app = express();
const responseRoutes = require('./routes/responseRoute');

app.use((req, res, next) => {
    // CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(responseRoutes);

app.listen(7000, () => {
    console.log('server is running');
})