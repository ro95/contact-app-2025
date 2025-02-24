const express = require("express"); // Ajoutez cette ligne

const app = express();

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
