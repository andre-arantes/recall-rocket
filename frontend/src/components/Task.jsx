import { useTasks } from "../hooks/useTasks";
import styles from "./styles.module.scss";

const Task = ({ task, showDate, formattedDate }) => {
  const { handleDelete, setUpdatingTask } = useTasks();
  return (
    <div className={styles.task} key={task.id}>
      {showDate && <h3>{formattedDate}</h3>}
      <div className={styles.desc}>
        <p title={task.name}>{task.name}</p>
        <div className={styles.buttons}>
          <button
            className={styles.update}
            onClick={() => setUpdatingTask(task)}
          >
            Editar
          </button>
          <button
            className={styles.delete}
            onClick={() => handleDelete(task.id)}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Task;
