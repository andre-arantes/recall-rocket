import { TodoForm } from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TaskProvider from "./contexts/Task";
import styles from "./components/styles.module.scss";
function App() {
  return (
    <TaskProvider>
      <div className={styles.container}>
        <main className={styles.principal}>
          <TodoForm />
          <TodoList />
        </main>
      </div>
    </TaskProvider>
  );
}

export default App;
