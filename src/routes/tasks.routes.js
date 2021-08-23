const router = require("express").Router();
const {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
  addTaskOpcionA
} = require("../controller/task.controller");
const { authJwt } = require("../middleware");

router.get("/", [authJwt.check], getTasks);
router.post("/", [authJwt.check], addTask);
router.post("/:userId", [authJwt.check], addTaskOpcionA);
router.delete("/:id", [authJwt.check], deleteTask);
router.put("/:id", [authJwt.check], updateTask);

module.exports = router;
