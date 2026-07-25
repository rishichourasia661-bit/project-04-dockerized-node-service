
const { MongoClient } = require("mongodb");

const uri = "mongodb://mongodb:27017";

const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");

        return client.db("projectDB");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed");
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;
