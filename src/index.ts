import express, { NextFunction, Request, Response } from "express";
import { LoginController } from "./controller/login/LoginController";
import { TodoController } from "./controller/todo/TodoController";
import { ILoginController } from "./controller/login/ILoginController";
import { ITodoController } from "./controller/todo/ITodoController";
import { nextTick } from "process";
import { MessageError } from "ts-av-common";

const app = express();
const port = 3030;

app.use(express.json());

// Controller
const loginController: ILoginController = new LoginController();
const todoController: ITodoController = new TodoController();

// Register new user
app.post("/register", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(201).json({username: "username", password: "password"});
  } catch (error) {
    const messageError: MessageError = new MessageError(401, `${error}`);
    res.status(messageError.getMessageError().status).json(messageError.getMessageError());
  }
});

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
    const messageError: MessageError = new MessageError(401, `${error}`);
    res.status(messageError.getMessageError().status).json(messageError.getMessageError());
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
