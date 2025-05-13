import "../styles/main.css"
import Priority from "./Priority"

const Task = ({check, content, priority}) => {

    
    
  return (
        <li className='task'>
            <input type="checkbox" name="" id="" value={check}/>
            <p>{content}</p>
            <Priority defaultPriority={priority} />
        </li>
    )
}

export default Task