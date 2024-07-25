import express, { Request, Response } from "express";
import { UserModel } from "./model/UserModel";
import { LoginController } from "./controller/login/LoginController";

const app = express();
const port = 3030;

app.use(express.json());

// Controller
const loginController = new LoginController();

// Login
app.post("/login", async (req: Request, res: Response) => {
  try {
    const user: UserModel = req.body;
    const response = await loginController.login(user);

    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ status: 401, message: `${error}` });
  }
});

// Get Todo list
app.get("/todo", async (req: Request, res: Response) => {
  try {
    res.status(200).send([])
  } catch (error) {
    res.status(401).json({ status: 401, message: `${error}` });
  }
})

// Find sinle item Todo
app.get("/todo/:todoId", async (req: Request, res: Response) => {
  try {

  } catch (error) {
    res.status(401).json({ status: 401, message: `${error}` });
  }
})

// Create new Todo list
app.post("/todo", async (req: Request, res: Response) => {
  try {

  } catch (error) {
    res.status(401).json({ status: 401, message: `${error}` });
  }
})

// Delete Todo list
app.delete("/todo", async (req: Request, res: Response) => {
  try {

  } catch (error) {
    res.status(401).json({ status: 401, message: `${error}` });
  }
})

// Delete item from Todo list
app.delete("/todo", async (req: Request, res: Response) => {
  try {

  } catch (error) {
    res.status(401).json({ status: 401, message: `${error}` });
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
