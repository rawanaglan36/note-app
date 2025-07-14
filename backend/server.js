require("dotenv").config();
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
const mongoURL = process.env.MONGO_URL || "mongodb://mongo:27017"; // Docker service name as hostname
const dbName = "notesapp";

app.use(cors());
app.use(express.json());
let db;

// Connect to MongoDB
MongoClient.connect(mongoURL, { useUnifiedTopology: true })
  .then((client) => {
    db = client.db(dbName);
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.get("/notes", async (req, res) => {
  if (!db) {
    return res.status(503).json({ error: "Database not ready" });
  }
  try {
    const notes = await db.collection("notes").find().toArray();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

app.post("/notes", async (req, res) => {
  if (!db) {
    return res.status(503).json({ error: "Database not ready" });
  }
  try {
    const { title, content } = req.body;
    const result = await db.collection("notes").insertOne({ title, content });
    res.json({ insertedId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: "Failed to add note" });
  }
});

app.delete("/notes/:id", async (req, res) => {
  if (!db) {
    return res.status(503).json({ error: "Database not ready" });
  }
  try {
    const id = req.params.id;
    const result = await db.collection("notes").deleteOne({ _id: new ObjectId(id) });
    res.json({ deleted: result.deletedCount === 1 });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete note" });
  }
});

app.get("/", (req, res) => {
  res.send("🚀 Welcome to Notes App API ");
});

app.listen(port, () => {
  console.log(`🚀 Notes API running at http://localhost:${port}`);
});
