import express from "express"
import cookieParser from "cookie-parser";
import userRouter from "./routes/index.js"
import config from "./config/env.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

app.disable("x-powered-by")
app.use(cookieParser(config.cookie_secret))
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        "Api-Endpoints": "Auth API is running-",
        get: ["/", "/api/v1", "/api/healthz"]
    })
})

app.use("/api", userRouter)

app.use("/api/healthz", (req, res) => {
    res.status(200).json({
        sucess: true,
        status: "api is running"
    })
})


// --- Register the global error handler middleware ---
app.use(errorHandler);

app.listen(config.PORT || 3000, () => {
    console.log(`Server listening on port: http://localhost:${config.PORT || 3000}`);
});



