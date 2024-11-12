import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  newUser,
} from "../controllers/user.js";
import { adminOnly } from "../middlewares/Auth.js";

const app = express.Router();

app.post("/new", newUser);
app.get("/all", adminOnly, getAllUsers);

// adminOnly middleware make sures the users trying to do the actions is admin or not

// if the route is common in two methods chain them together
app.route("/:id").get(getUser).delete(adminOnly, deleteUser);

export default app;
