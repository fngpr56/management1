import express from "express";
import dotenv from "dotenv";
import { notFound } from "./src/middlewares/notFound.js";
import { handleError } from "./src/middlewares/handleError.js";
import notesRoute from "./routes.js";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Mount routes directly at root
app.use("/", notesRoute);

// Error handling
app.use(notFound);
app.use(handleError);

// Start server
app.listen(port, () => {
  console.log(`server -> http://localhost:${port}`);
});
