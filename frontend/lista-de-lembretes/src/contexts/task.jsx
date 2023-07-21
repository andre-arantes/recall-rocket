import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const Task = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [updatingTask, setUpdatingTask] = useState(null);

  const fetchAllTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete("/tasks/" + id);
      fetchAllTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await api.patch("/tasks/" + updatingTask.id, updatingTask);
      fetchAllTasks();
      setUpdatingTask(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreate = async (task) => {
    try {
      await api.post("/tasks", task);
      fetchAllTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Task.Provider
      value={{
        handleDelete,
        handleUpdate,
        handleCreate,
        tasks,
        fetchAllTasks,
        updatingTask,
        setUpdatingTask,
      }}
    >
      {children}
    </Task.Provider>
  );
};
export default TaskProvider;
