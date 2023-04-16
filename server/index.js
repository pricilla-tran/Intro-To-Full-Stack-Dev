const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

const app = express();

// use() function is used to mount a middleware function to a certain path
// app.use("PATH", function())
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//mongoose.connect() establishes a connection with our database by taking a connection URI from the env file
mongoose.connect(MONGODB_URI, {
    useNewUrlPasser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection successful");
}); 

const fortuneRouter = require("./routes/fortunes");
app.use("/api/fortunes", fortuneRouter);

app.use(express.static(path.resolve(_dirname, "../client", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "../client", "build", "index.html"));
});

app.listen(3001, () => {
    console.log(`Server Stated on port: ${PORT}`);
});

