import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUserPassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.findOneAndUpdate(
      { email: email.toLowerCase().trim() },
      { password: hashedPassword },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      success: true,
      message: "Password created/updated successfully",
      user: {
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill up all the required fields.",
        success: false,
      });
    }

    // Check User existance
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found.",
      });
    }

    // Match Password and Generate JWT Token
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "24h" }
      );

      user.password = undefined;

      return res.status(200).json({
        success: true,
        token,
        user,
        message: "User logged in successfully!",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be logged in. Please try again.",
    });
  }
};
