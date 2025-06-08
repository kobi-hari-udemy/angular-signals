const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");

const PORT = 3000;
const app = express();
const booksFile = path.join(__dirname, "books.json");

let books = [];
try {
    books = JSON.parse(fs.readFileSync(booksFile, "utf8"));
} catch (e) {
    books = [];
    console.error("Failed to load books.json:", e);
}

// --- CORS for localhost:4200 ---
app.use(cors({ origin: "http://localhost:4200" }));

// --- Middleware delay 2 seconds ---
app.use((req, res, next) => {
  setTimeout(next, 2000);
});

// --- REST Endpoints ---

// Get all books
app.get("/api/books", (req, res) => {
    res.json(books);
});

// Get only book ids
app.get("/api/books/ids", (req, res) => {
    res.json(books.map(b => b.id));
});

// Search books by title or description (case-insensitive)
app.get("/api/books/search", (req, res) => {
    console.log("Search query:", req.query.q);
    const q = (req.query.q || "").toLowerCase();
    if (!q) return res.json([]);
    const results = books.filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
    );
    res.json(results);
});

// Get book by id
app.get("/api/books/:id", (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    if (book) res.json(book);
    else res.status(404).json({ error: "Book not found" });
});


// --- Start HTTP Server ---
const server = app.listen(PORT, () => {
    console.log("REST API running on http://localhost:" + PORT);
});

// --- WebSocket for stock updates ---
const wss = new WebSocket.Server({ noServer: true });

function getBookIndexById(id) {
    return books.findIndex(b => b.id === id);
}

// Randomly update stock every 5s per book, but only for connected sockets
const stockIntervals = new Map();

server.on("upgrade", (req, socket, head) => {
    // Expected path: /ws/stock/:id
    const url = req.url || "";
    const match = url.match(/^\/ws\/stock\/([a-f0-9\-]{36})$/);
    if (!match) {
        socket.write("HTTP/1.1 404 Not Found\r\n\r\n");
        socket.destroy();
        return;
    }
    const bookId = match[1];
    if (getBookIndexById(bookId) === -1) {
        socket.write("HTTP/1.1 404 Not Found\r\n\r\n");
        socket.destroy();
        return;
    }
    wss.handleUpgrade(req, socket, head, ws => {
        wss.emit("connection", ws, bookId);
    });
});

wss.on("connection", (ws, bookId) => {
    let idx = getBookIndexById(bookId);
    if (idx === -1) {
        ws.close();
        return;
    }

    // Send initial stock immediately
    ws.send(JSON.stringify({ stock: books[idx].stock }));

    // Setup periodic stock updates
    const interval = setInterval(() => {
        // Randomize stock by +/- up to 5, keep >= 0
        let delta = Math.floor(Math.random() * 11) - 5;
        books[idx].stock = Math.max(0, books[idx].stock + delta);
        ws.send(JSON.stringify({ stock: books[idx].stock }));
    }, 5000);

    ws.on("close", () => clearInterval(interval));
    ws.on("error", () => clearInterval(interval));
});
