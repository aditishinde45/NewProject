import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http";

dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("InterviewIQ Backend Running 🚀");
});

const start = async () => {
    try {
        const connectionDb = await mongoose.connect(MONGO_URL);

        console.log(`MongoDB Connected: ${connectionDb.connection.host}`);

        server.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

start();