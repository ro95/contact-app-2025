const express = require("express"); // Ajoutez cette ligne

const app = express();

app.get("/", (req, res) => res.send("API Running"));

//Define Routes
// récupérer tous les contacts
app.use("/api/contacts", require("./routes/api/contacts"));

// récupérer un contact spécifique
app.use("/api/contacts/:id", require("./routes/api/contacts"));

// ajouter un nouveau contact
app.use("/api/contacts", require("./routes/api/contacts"));

// mettre à jour un contact existant
app.use("/api/contacts/:id", require("./routes/api/contacts"));

// supprimer un contact
app.use("/api/contacts/:id", require("./routes/api/contacts"));

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
