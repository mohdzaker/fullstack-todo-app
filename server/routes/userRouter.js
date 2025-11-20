import express from "express";
import { registerUser } from "../controller/user";
import authUser from "../middlewares/auth";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.use(authUser);
userRouter.get("/profile", getUserProfile);
userRouter.put("/profile", updateUserProfile);
userRouter.delete("/profile", deleteUserProfile);

// todo routes
userRouter.post("/todo", createTodo);
userRouter.get("/todo", getTodos);
userRouter.put("/todo/:id", updateTodo);
userRouter.delete("/todo/:id", deleteTodo);

export default userRouter;
