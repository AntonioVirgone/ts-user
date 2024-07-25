import express, { Request, Response } from "express";
import { UserModel } from "./model/UserModel";
import { LoginController } from "./controller/Login/LoginController";

const app = express();
const port = 3030;

app.use(express.json());

// Controller
const loginController = new LoginController();

// Login
app.post("/login", async (req: Request, res: Response) => {
  try {
    const user: UserModel = req.body;

    console.log(`user ${JSON.stringify(user)}`);
    const response = await loginController.login(user);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    
    res.status(401).json({ status: 401, message: `${error}` });
  }
});

// Get Todo list

// Find sinle item Todo

// Create new Todo list

// Delete Todo list

// Delete item from Todo list

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
