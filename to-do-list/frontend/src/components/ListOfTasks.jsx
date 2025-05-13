import Task from './Task'

const ListOfTasks = ({tasks}) => {

  if(!tasks) return null

  // const handlerPriority = () => {
  //     UpdateTask()
  // }

  
  
  return (
    <ul>
        { tasks.map( (task) => (
            <Task 
                check={task.check} 
                content={task.content} 
                priority={task.priority} 
                key={task.id} 
            />  
          ))
        }
    </ul>
  )
}

export default ListOfTasks 