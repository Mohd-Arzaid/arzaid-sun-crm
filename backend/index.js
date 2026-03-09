import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db.js";
import authRoute from "./routes/auth.route.js";
import applicantAndProductInformationRoute from "./routes/applicant-and-product-information.route.js";
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND_URL,
};

app.use(cors(corsOptions));

// Testing the server
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server is up and running ...",
  });
});

// APIs
app.use("/api/v1/auth", authRoute);
app.use(
  "/api/v1/applicant-and-product-information",
  applicantAndProductInformationRoute
);
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
