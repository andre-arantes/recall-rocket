import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import styles from "./styles.module.scss";

const initialState = {
  name: "",
  date: "",
};

export function TodoForm() {
  const [task, setTask] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");

  const { updatingTask, handleCreate, handleUpdate, setUpdatingTask } =
    useTasks();

  const handleChange = (e) => {
    if (updatingTask) {
      setUpdatingTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const actualTask = updatingTask || task;

    if (!actualTask.name || !actualTask.date) {
      setErrorMessage("Preencha todos os campos para criar sua tarefa.");
      return;
    }

    const currentDate = new Date();
    const selectedDate = new Date(actualTask.date + " 23:59");

    if (selectedDate < currentDate) {
      setErrorMessage(
        "Não é permitido criar lembretes anteriores ao dia atual."
      );
      return;
    }

    if (updatingTask) {
      handleUpdate();
    } else {
      await handleCreate(actualTask);
      setTask(initialState);
    }
    setErrorMessage("");
  };

  return (
    <div className={styles.form}>
      <h1>Crie o seu lembrete!</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form>
        <input
          type="text"
          name="name"
          placeholder="Digite sua tarefa"
          autoComplete="off"
          onChange={handleChange}
          required
          value={updatingTask ? updatingTask.name : task.name}
        />
        <input
          type="date"
          name="date"
          autoComplete="off"
          onChange={handleChange}
          value={updatingTask ? updatingTask.date : task.date}
          required
        />
        <button onClick={handleSubmit}>+</button>
      </form>
    </div>
  );
}
