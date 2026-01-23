import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB} from "./config/db.js";

const app = express();

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
    console.log("Server started on PORT:5001");
});


// mongodb+srv://shaheemmuhammed744_db_user:Shaheem@744@cluster0.ufxpwkq.mongodb.net/?appName=Cluster0