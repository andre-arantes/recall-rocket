import Router from "express";
import {
  handleCreateTasks,
  handleDeleteTasks,
  handleGetTasks,
  handleUpdateTasks,
} from "./controllers.js";

const router = Router();

router.use(
  "/tasks",
  (() => {
    const tasksRouter = Router();
    tasksRouter.get("/", handleGetTasks);
    tasksRouter.post("/", handleCreateTasks);
    tasksRouter.patch("/:id", handleUpdateTasks);
    tasksRouter.delete("/:id", handleDeleteTasks);
    return tasksRouter;
  })()
);
export default router;
