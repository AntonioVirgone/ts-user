import express, { NextFunction, Request, Response } from "express";
import { LoginController } from "./controller/login/LoginController";
import { TodoController } from "./controller/todo/TodoController";
import { ILoginController } from "./controller/login/ILoginController";
import { ITodoController } from "./controller/todo/ITodoController";
import { nextTick } from "process";

const app = express();
const port = 3030;

app.use(express.json());

// Controller
const loginController: ILoginController = new LoginController();
const todoController: ITodoController = new TodoController();

// Login
app.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await loginController.login(req, res, next);

    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ status: 401, message: `${error}` });
  }
});

// Get Todo list
app.get("/todo", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await todoController.find(req, res, next);
    
    res.status(200).json(result)
  } catch (error) {
    res.status(401).json({ status: 404, message: `${error}` });
  }
})

// Create new Todo list
app.post("/todo", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await todoController.create(req, res, next);
    res.status(201).json(result);
  } catch (error) {
    res.status(401).json({ status: 401, message: `${error}` });
  }
})

// Find sinle item Todo
app.get("/todo/:todoId", async (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (error) {
    res.status(401).json({ status: 401, message: `${error}` });
  }
})

// Delete Todo list
app.delete("/todo", async (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (error) {
    res.status(401).json({ status: 401, message: `${error}` });
  }
})

// Delete item from Todo list
app.delete("/todo", async (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (error) {
    res.status(401).json({ status: 401, message: `${error}` });
  }
})

app.listen(port, () => {
  console.log(`Server ts-user is running at http://localhost:${port}`);
});
