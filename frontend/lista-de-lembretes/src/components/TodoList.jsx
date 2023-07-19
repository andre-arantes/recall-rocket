import { useState, useEffect } from "react"
import axios from 'axios'
const TodoList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchAllTasks = async() => {
      try {
        const res = await axios.get('http://localhost:8800/api/tasks')
        setTasks(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllTasks()
    })

    const handleDelete = async(id) => {
      try {
        await axios.delete("http://localhost:8800/api/tasks/"+id)
      } catch (err) {
        console.log(err);
      }
    } 

    const handleUpdate = async(id) => {
      try {
        await axios.put("http://localhost:8800/api/tasks/"+id)
      } catch (err) {
        console.log(err);
      }
    } 
  return (
    <div>
      <div className="tasks">
      {tasks.map(task=>(
        <div className="task" key={task.id}>
          <h2>{task.name}</h2>
          <h2>{task.date}</h2>
          <button onClick={() => handleUpdate(task.id)}>Update</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default TodoList