import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/tasks/'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}
  
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(res => res.data)
}
  
// const update = (id, newObject) => {
//     const request = axios.put(`${baseUrl}/${id}`, newObject)
//     return request.then(res => res.data)
// }

const deleteAllTasks = () => {
    const request = axios.delete(baseUrl)
    return request.then(res => res.data)
}
  
export default { getAll, create, deleteAllTasks }