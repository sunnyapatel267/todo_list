import { useEffect, useState } from 'react'

import Header from './components/Header'
import AddTask from './components/AddTask'
import todoListService from './services/todoList'
import DisplayTasks from './components/DisplayTasks'

function App() {
  const [toDoList, settoDoList] = useState([])
  const [newTask, setTask] = useState('')

  useEffect(() => {
    todoListService
      .getList()
      .then(intialTask => {
        settoDoList(intialTask)
      })
  }, [])

  const addTask = (event) => {
    event.preventDefault()

    const newData = {
      content: newTask
    }

    todoListService
      .create(newData)
      .then(returnedTask =>{
        settoDoList(toDoList.concat(returnedTask))
      })

    
    setTask('')
  }

  const removeTask = (id) => {
    todoListService
      .deleteTask(id)
      .then(returnedTask => {
        settoDoList(toDoList.filter(task => task.id !== id))
      })
  }

  const changeOnTask = (event) => {
    setTask(event.target.value)
  }

  <DisplayTasks toDoList={toDoList} removeTask={removeTask}/>
  
  return (
    <div className='bg-green-800 relative h-screen'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='w-full max-w-screen-lg p-8 bg-green-800'>
          <Header header={"Create your Todo-List"}/>
          <AddTask addTask={addTask} newTask={newTask} changeOnTask={changeOnTask}/>
          <DisplayTasks toDoList={toDoList} removeTask={removeTask}/>
        </div>
      </div>
    </div>
  )
}

export default App
