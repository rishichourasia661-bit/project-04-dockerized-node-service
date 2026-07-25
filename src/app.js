const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const express = require("express");
const authMiddleware = require("./middleware/auth");
const connectDB = require("./config/database");
const userRoutes = require("./routes/users");

const app = express();
app.use(express.json());
let db;

const PORT = process.env.PORT || 3000;

// Home Route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Protected Route
app.get("/secret", authMiddleware, (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

// Register all user routes
app.use("/", userRoutes);

// Start Server
async function startServer() {
    db = await connectDB();

    app.locals.db = db;

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
app.use(errorHandler);
startServer();