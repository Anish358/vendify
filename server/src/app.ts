import express from "express";

// Routes
import UserRoute from "./routes/user.js";
import ProductRoute from "./routes/products.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";

const PORT = 5000;
const app = express();
app.use(express.json());

// MongoDB Connection
connectDB("mongodb://localhost:27017");

// Default route
app.get("/", (req, res) => {
  res.send("API Working");
});

// Using routes
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/product", ProductRoute);
app.use("/uploads", express.static("uploads"));

// Error handler
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});
