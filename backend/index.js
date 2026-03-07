import express from "express";
const app = express();
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Testing the server
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server is up and running ...",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
