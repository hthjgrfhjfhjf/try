import express from "express";
import router from "./Routes/auth.routes.js";
import { connectToDatabase, sequelize } from "./db/dbConect.js";
const app = express();
const PORT = 3001;

app.use(express.json());
app.use("/api/auth", router);

const start = async () => {
    try {
        await connectToDatabase();

        await import("./models/user.model.js"); 

        await sequelize.sync(); 

        app.listen(PORT, () => {
            console.log(`Server started at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Startup error:", error);
    }
}
start();