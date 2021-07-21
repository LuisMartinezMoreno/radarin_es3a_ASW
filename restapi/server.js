const express = require("express");
const promBundle = require("express-prom-bundle");
const cors = require("cors");
const mongoose = require("mongoose");
const api = require("./api");

function connect(){
    //The MONGO_URI variable is the connection string to MongoDB Atlas (for production). This env variable is created in heroku.
    var mongoUri = 
        "mongodb+srv://user:sVRwi6Nuc3rVQd9y@cluster0.7jsgb.mongodb.net/database?retryWrites=true&w=majority";
    mongoose.connect(mongoUri, { useNewUrlParser: true,
            useUnifiedTopology: true }).then(() => {
        const app = express();

        //Monitoring middleware
        const metricsMiddleware = promBundle({includeMethod: true});
        app.use(metricsMiddleware);

        app.use(cors());
        app.options("*", cors());
        app.use(express.json());
        app.use("/api", api);

        app.listen(process.env.PORT || 5000, () => {});
    });
}

// Connect to MongoDB database, the wait is for giving time to mongodb to finish loading
setTimeout(connect,5000);