import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

function validateItem(item) {
  // Basic validation, expand as needed
  if (
    typeof item.name !== "string" ||
    typeof item.price !== "number" ||
    typeof item.offer_price !== "number" ||
    typeof item.stars !== "number" ||
    typeof item.type !== "string" ||
    typeof item.dress_style !== "string" ||
    !Array.isArray(item.colors) ||
    typeof item.quantity !== "number" ||
    !Array.isArray(item.sizes) ||
    typeof item.description !== "string" ||
    typeof item.images !== "object" ||
    !Array.isArray(item.reviews) ||
    !Array.isArray(item.faq) ||
    typeof item.date !== "string"
  ) {
    return false;
  }
  return true;
}

async function startServer() {
  try {
    await client.connect();
    const db = client.db("items");

    app.get("/api/items", async (req, res) => {
      try {
        const items = await db.collection("items").find().toArray();
        res.json(items);
      } catch (err) {
        res.status(500).json({ error: "Failed to fetch items", details: err.message });
      }
    });

    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

startServer();