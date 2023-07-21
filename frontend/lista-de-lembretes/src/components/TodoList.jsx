import { useTasks } from "../hooks/useTasks";
import Task from "./Task";
import styles from "./styles.module.scss";

const TodoList = () => {
  const { tasks } = useTasks();

  const sortedTasks = [...tasks].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  let prevDate = null;
  return (
    <div className={styles.listaWrapper}>
      <div className={styles.lista}>
        {sortedTasks.map((task) => {
          const currentDate = new Date(task.date);
          const formattedDate = currentDate.toLocaleDateString("pt-BR", {
            timeZone: "UTC",
          });
          const showDate = prevDate !== currentDate.getTime();
          prevDate = currentDate.getTime();
          return (
            <Task
              task={task}
              key={task.id}
              showDate={showDate}
              formattedDate={formattedDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
