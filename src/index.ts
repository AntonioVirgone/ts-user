import express, { Request, Response } from 'express';
import { UserModel } from './model/UserModel';

const app = express()
const port = 3030;

app.use(express.json());

// Login
app.post("/login", async (req: Request, res: Response) => {
    const user: UserModel = req.body;

    console.log(`user ${JSON.stringify(user)}`);
    res.send();
})

// Get Todo list

// Find sinle item Todo

// Create new Todo list

// Delete Todo list

// Delete item from Todo list

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})