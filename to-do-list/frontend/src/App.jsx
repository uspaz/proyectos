import { useEffect, useState } from "react"
import AddTask from "./components/AddTask"
import ListOfTasks from "./components/ListOfTasks"
import Filter from "./components/Filter"
import tasksServices from "./services/tasks"
import "./styles/main.css"


function App() {
  const [tasks, setTasks] = useState([])

  useEffect( () => {
    
    tasksServices
      .getAll()
      .then((task) => {
        
        setTasks(task)
      })
    
  }, [])
  

  return (
    <div className="container">
      <h1>TO-DO List</h1>
      <div>
        <h3>Agregar tarea: </h3>
        <AddTask />
      </div>
      <div>
        <h3>Filtrar tareas:</h3>
        <Filter />     
      </div>
      <ListOfTasks tasks={tasks} />     
    </div>
  )
}

export default App
