import Show from "./Show"

const DisplayTasks = ({ toDoList, removeTask }) => {
    return (
        <div className="text-yellow-100 py-8">
            {Array.isArray(toDoList) && toDoList.length > 0 ?  (
                toDoList.map(task =>
                    <Show  key={task.id} task={task} removeTask={removeTask}/>
                )
            ) : (
                <p className="bg-gray-700 p-2.5 rounded-lg w-1/2">No Tasks Available</p>
            )
            }
        </div>
    )
}

export default DisplayTasks