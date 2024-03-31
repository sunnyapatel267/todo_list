import axios from 'axios'
const baseUrl = '/list'

const getList = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
        .catch(error => {
            console.error('Error fetching list:', error);
            throw error;
        })
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
        .catch(error => {
            console.error('Error adding to list:', error);
            throw error;
        })
}

const deleteTask = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
        .catch(error => {
            console.error('Error deleting from list:', error);
            throw error;
        })
} 

export default { getList, create, deleteTask }
