const { Router } = require("express");
const userRoutes = require("./users.routes");
const taskRoutes = require("./tasks.routes");
const authRoutes = require("./auth.routes");
// const isValido = require('../middleware/middlewares').isValido;

const initUserRoutes = () => {
    const router = Router();
    router.use("/users", userRoutes);
    return router;
}

const initTaskRoutes = () => {
    const router = Router();
    router.use("/tasks", taskRoutes);
    return router;
}

const initAuthRoutes = () => {
    const router = Router();
    router.get("/", (req,res)=>res.send("BIENVENIDO AUT- !!!"));
    router.use("/auth", authRoutes);
    return router;
}

module.exports = { initUserRoutes, initTaskRoutes, initAuthRoutes }; 