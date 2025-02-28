import express from "express";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/api/contact.routes";

const app = express();

// Connexion à la base de données
connectDB()
  .then(() => console.log("✅ MongoDB connecté"))
  .catch((err: any) => console.error("❌ Erreur MongoDB:", err));

// Routes API
app.use("/api/contacts", contactRoutes);

// Gestion des erreurs
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send("🚨 Une erreur est survenue !");
});

// Lancer le serveur
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
