import { useState } from "react"
import "../styles/main.css"
import { useEffect } from "react"


const Priority = ({ defaultPriority , onChangePriority }) => {
    const [priority, setPriority] = useState(defaultPriority || "medium")

    useEffect(() => {
        setPriority(defaultPriority)
    }, [defaultPriority])

    const handlePriority = (e) => {
        const newPriority = e.target.value;
        setPriority(newPriority);
        onChangePriority(newPriority);
    }
    


  return (
    <select value={priority} onChange={handlePriority}>
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
    </select>
  )
}

export default Priority