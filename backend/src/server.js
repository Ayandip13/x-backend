import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => res.send("Hello from the backend!"));

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

//error handelling middleware
app.use((err, req, res) => {
  console.log("Unhandled error", err);
  res.status(500).json({ error: err.message || "Internal Server error" });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server running on port", ENV.PORT);
    });
  } catch (error) {
    console.log("Error starting server", error);
    process.exit(1);
  }
};

startServer();
