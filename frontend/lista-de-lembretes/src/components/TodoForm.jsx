import { useState } from 'react'
import { TodoButton } from './styles'
import axios from 'axios';

export function TodoForm() {
  const[task, setTask] = useState({
    name: '',
    date: ''
  });
  const handleChange = (e) => {
    setTask((prev)=>({ ...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/api/tasks", task)
    } catch (err) {
      console.log(err);
    }
  }

  

  return (
    <div>
      <h1>Adicione um lembrete!</h1>
      <form>
      <input type="text" name="name" placeholder="digite sua tarefa" autoComplete="off" onChange={handleChange} />
      <input type="date" name="date" placeholder="digite a data" autoComplete="off" onChange={handleChange} />
        <TodoButton onClick={handleSubmit}> OK </TodoButton>
      </form>
    </div>
  )
}