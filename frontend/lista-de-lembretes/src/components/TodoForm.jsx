import { TodoButton } from './styles'

export function TodoForm() {

  const handleChange = () => {
    console.log("Change")
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log("Submit")
  }
  return (
    <div>
      <h1>Adicione um lembrete!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" placeholder="digite sua tarefa" onChange={handleChange} />
        <TodoButton> OK </TodoButton>
      </form>
    </div>
  )
}