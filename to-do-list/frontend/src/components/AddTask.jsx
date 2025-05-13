import Priority from "./Priority"
import "../styles/main.css"

const AddTask = () => {

  const handleTask = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleTask}>
      <label htmlFor="">Tarea:</label>
      <input type="text" />

      <label htmlFor="">Prioridad:</label>
      <Priority onChangePriority={handleTask}/>
    </form>
  )
}

export default AddTask