# Anyware Software (Fullstack Challenge) - Backend

This is the backend service for the Anyware Software Fullstack Challenge. It is built with Node.js, TypeScript, and Express, and provides a RESTful API for the educational dashboard frontend.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
cd server
npm install
```

### 2. Configure Environment

- Copy `src/config/config.env` to your environment or set the required variables (e.g., database connection, port).

### 3. Start the server

```bash
npm run dev
```

The server will start on the port specified in your environment (default: 5000).

---

## 📚 API Documentation (Swagger)

- After starting the server, visit [http://localhost:5000/api-docs](http://localhost:5000/api-docs) to explore the API using Swagger UI.
- All available endpoints, request/response schemas, and example payloads are documented there.

---

## ✨ Features

- **RESTful API**: Provides endpoints for announcements, quizzes, and more.
- **Swagger Docs**: Interactive API documentation for easy exploration and testing.
- **Async/Await**: All controllers use async/await for clean, modern code.
- **Error Handling**: Centralized error handler middleware.
- **Type Safety**: Full TypeScript support for models, controllers, and routes.
- **Configurable**: Environment-based configuration for easy deployment.

---

## 🛠️ Main API Endpoints

### Announcements

- `GET /api/announcements` — List all announcements
- `POST /api/announcements` — Create a new announcement
- `GET /api/announcements/:id` — Get a specific announcement
- `PUT /api/announcements/:id` — Update an announcement
- `DELETE /api/announcements/:id` — Delete an announcement

### Quizzes

- `GET /api/quizzes` — List all quizzes
- `POST /api/quizzes` — Create a new quiz
- `GET /api/quizzes/:id` — Get a specific quiz (with questions)
- `PUT /api/quizzes/:id` — Update a quiz
- `DELETE /api/quizzes/:id` — Delete a quiz

> More endpoints can be found and tested in the Swagger docs.

---

## 📝 Project Structure

```
server/
├── src/
│   ├── config/         # Environment config
│   ├── controllers/    # Route controllers (business logic)
│   ├── middlewares/    # Express middlewares (error handler, etc.)
│   ├── models/         # Data models (e.g., Announcement, Quiz)
│   ├── routes/         # API route definitions
│   ├── types/          # TypeScript types
│   ├── utils/          # Utility functions (db, asyncHandler, swagger)
│   └── index.ts        # App entry point
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript config
└── ...
```

---

## 📝 Notes

- The backend is stateless and ready for integration with any frontend.
- All API responses are JSON.
- For full API details, use the Swagger docs at `/api/docs` after starting the server.

---

## License

MIT
