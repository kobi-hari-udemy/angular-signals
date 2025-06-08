# Mock Book Server

A simple Node.js server providing REST API and WebSocket endpoints to mock a books inventory system.

## Features

- REST API to get books, search, fetch by id, and list all ids.
- WebSocket endpoint to subscribe for live stock updates of a book.
- CORS enabled for `localhost:4200`.

## Install & Run

```sh
npm install
npm start
```

Server listens on `http://localhost:3000`.

## REST Endpoints

- `GET /api/books` — List all books
- `GET /api/books/ids` — List all book ids
- `GET /api/books/search?q=keyword` — Search books by title/description
- `GET /api/books/:id` — Get book by id

## WebSocket

Connect to `ws://localhost:3000/ws/stock/:id` for live stock updates (one integer every 5 seconds).

