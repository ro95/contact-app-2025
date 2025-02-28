import { error } from "console";

const mongoose = require("mongoose");
const config = require("config");

// Récupération de l'URI MongoDB depuis config/default.json
const db = config.get("mongoURI");

export const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected...");
  } catch (err) {
    if (err instanceof Error) {
      console.error("❌ Erreur de connexion à MongoDB :", err.message);
    } else {
      console.error("❌ Erreur de connexion à MongoDB :", err);
    }

    // Arrêter le serveur si MongoDB ne se connecte pas
    process.exit(1);
  }
};

module.exports = connectDB;
