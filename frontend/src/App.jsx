import { TodoForm } from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import TaskProvider from "./contexts/Task.jsx";
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
