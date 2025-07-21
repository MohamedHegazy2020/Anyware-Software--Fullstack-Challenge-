import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import connectDB from "../utils/db";
import announcementRoutes from "../routes/announcement.routes";
import quizRoutes from "../routes/quiz.routes";
import errorHandler from "../middlewares/errorHandler";
import dotenv from "dotenv";
import path from "path";

import { setupSwagger } from "./swagger";

dotenv.config({ path: path.resolve(__dirname, "../config/config.env") });

const app = express();

export async function bootstrap() {
  // Security middlewares
  app.use(helmet()); //Helmet is a middleware that helps secure your Express application by setting various HTTP headers.
  app.use(cors()); //CORS is a security feature that allows or restricts web pages from making requests to a different domain than the one that served the web page.

  // Rate limiter
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100,
    })
  );

  app.use(express.json());

  // Connect to MongoDB
  await connectDB();

  // API routes
  // app.use("/", (req, res) => {
  //   res.send("Welcome to Anyware Software API");
  // });
  app.get("/", (req, res) => {
    res.send("Welcome to Anyware Software API");
  });
  app.use("/api/announcements", announcementRoutes);
  app.use("/api/quizzes", quizRoutes);
  
  // Swagger setup
  setupSwagger(app);

  // Global error handler
  app.use(errorHandler);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

export { app };
