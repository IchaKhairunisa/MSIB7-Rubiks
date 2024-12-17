import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();
const JWT_SECRET = "your_jwt_secret_key";

class UsersController {
  // Register a new user
  async register(req, res) {
    try {
      const { username, email, password } = req.body;

      // Check if username or email already exists
      const existingUser = await prisma.user.findFirst({
        where: { OR: [{ username }, { email }] },
      });

      if (existingUser) {
        return res.status(400).json({
          status: false,
          message: "Username or email already exists",
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the new user
      const id = `user-${nanoid(8)}`;
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
      return res.status(201).json({
        status: true,
        message: "User successfully registered",
        data: newUser,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: false,
        message: "Failed to register user",
      });
    }
  }

  // Login user
  async login(req, res) {
    try {
      const { username, password } = req.body;

      // Find the user by username
      const user = await prisma.user.findUnique({
        where: { username },
      });

      if (!user) {
        return res.status(404).json({
          status: false,
          message: "User not found",
        });
      }

      // Verify the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          status: false,
          message: "Invalid username or password",
        });
      }

      // Generate a JWT token
      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.status(200).json({
        status: true,
        message: "Login successful",
        token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: false,
        message: "Failed to login",
      });
    }
  }
}

export default new UsersController();
