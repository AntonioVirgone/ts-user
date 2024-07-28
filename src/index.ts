import express, { NextFunction, Request, Response } from "express";
import { LoginController } from "./controller/login/LoginController";
import { TodoController } from "./controller/todo/TodoController";
import { ILoginController } from "./controller/login/ILoginController";
import { ITodoController } from "./controller/todo/ITodoController";
import { MessageError } from "ts-av-common";
import { IRegisterController } from "./controller/register/IRegisterController";
import { RegisterController } from "./controller/register/RegisterController";

const app = express();
const port = 3030;

app.use(express.json());

// Controller
const loginController: ILoginController = new LoginController();
const todoController: ITodoController = new TodoController();
const registerController: IRegisterController = new RegisterController();

// Register new user
app.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    await registerController
      .register(req, res, next)
      .then(() => {
        res.status(201).json();
      })
      .catch((error) => {
        const messageError: MessageError = new MessageError(409, `${error}`);
        res
          .status(messageError.getMessageError().status)
          .json(messageError.getMessageError());
      });
  }
);

// Login
app.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  await loginController
    .login(req, res, next)
    .then((result) => res.status(200).json(result))
    .catch((error) =>
      res.status(401).json({ status: 401, message: `${error}` })
    );
});

// Create new Todo item
app.post("/todo", async (req: Request, res: Response, next: NextFunction) => {
  await todoController
    .create(req, res, next)
    .then((result) => res.status(201).json(result))
    .catch((error) =>
      res.status(400).json({ status: 400, message: `${error}` })
    );
});

// Get Todo list
app.get("/todo", async (req: Request, res: Response, next: NextFunction) => {
  await todoController
    .find(req, res, next)
    .then((result) => res.status(200).json(result))
    .catch((error) => {
      const messageError: MessageError = new MessageError(401, `${error}`);
      res
        .status(messageError.getMessageError().status)
        .json(messageError.getMessageError());
    });
});

// Find sinle item Todo
app.get(
  "/todo/:todoId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // TODO:
    } catch (error) {
      res.status(401).json({ status: 401, message: `${error}` });
    }
  }
);

// Delete Todo list
app.delete("/todo", async (req: Request, res: Response, next: NextFunction) => {
  await todoController
    .delete(req, res, next)
    .then(() => res.status(200).json())
    .catch((error) => {
      const messageError: MessageError = new MessageError(400, `${error}`);
      res
        .status(messageError.getMessageError().status)
        .json(messageError.getMessageError());
    });
});

// Delete item from Todo list
app.delete(
  "/todo/:todoItemId",
  async (req: Request, res: Response, next: NextFunction) => {
    await todoController
      .deleteById(req, res, next)
      .then(() => res.status(200).json())
      .catch((error) =>
        res.status(401).json({ status: 400, message: `${error}` })
      );
  }
);

// Change item status at next or back value of state
app.patch(
  "/todo/:todoItemId/status/:status",
  async (req: Request, res: Response, next: NextFunction) => {
    await todoController
      .changeStatus(req, res, next)
      .then(() => res.status(200).json())
      .catch((error) =>
        res.status(400).json({ status: 400, message: `${error}` })
      );
  }
);

app.listen(port, () => {
  console.log(`Server ts-user is running at http://localhost:${port}`);
});
