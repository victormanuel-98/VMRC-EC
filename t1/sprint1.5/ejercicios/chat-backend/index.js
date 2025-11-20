// chat-backend/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db"); // Asegúrate de tener db.js configurado

// Forzar uso de UTF-8 en la conexión (ayuda con tildes/emoji)
db.query("SET NAMES utf8mb4").catch(err => console.error("Error setting connection charset:", err));

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// 🔹 Crear nueva conversación
app.post("/conversations", async (req, res) => {
    try {
        const { name } = req.body;
        const [result] = await db.query("INSERT INTO conversations (name) VALUES (?)", [name || "Nueva conversación"]);
        res.json({ id: result.insertId, name: name || "Nueva conversación" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Listar todas las conversaciones
app.get("/conversations", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM conversations ORDER BY created_at DESC");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Obtener mensajes de una conversación
app.get("/conversations/:id/messages", async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query(
            "SELECT * FROM messages WHERE conversation_id = ? ORDER BY created_at ASC",
            [id]
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Agregar un mensaje a una conversación
app.post("/conversations/:id/messages", async (req, res) => {
    try {
        const { id } = req.params;
        const { role, content } = req.body;
        const [result] = await db.query(
            "INSERT INTO messages (conversation_id, role, content) VALUES (?, ?, ?)",
            [id, role, content]
        );
        res.json({ id: result.insertId, role, content });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Eliminar conversación (y sus mensajes automáticamente)
app.delete("/conversations/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await db.query("DELETE FROM conversations WHERE id = ?", [id]);
        res.json({ deleted: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
