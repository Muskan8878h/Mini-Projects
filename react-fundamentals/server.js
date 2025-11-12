import dotenv from "dotenv";
import app from "./src/Data/app.js";
import connectDB from "./src/Data/config/db.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(` Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error(" DB connection failed:", err);
  });
