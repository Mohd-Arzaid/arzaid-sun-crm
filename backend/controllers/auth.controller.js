import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

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
