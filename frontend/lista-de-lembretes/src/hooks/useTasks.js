import { useContext } from "react";
import { Task } from "../contexts/Task";

export const useTasks = () => useContext(Task);
