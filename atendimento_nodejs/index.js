//index.js
const express = require("express");
const app = express();
const port = 3000;
const setupRoutes = require('./routers/index');

setupRoutes(app);

app.listen(port, (error) => {
    if(error) {
        console.log("Error");
        return;
    }
    console.log("Subiu, gg");
});