const Show = ({ task,removeTask }) => {
    return (
        <div className="bg-gray-700 p-3 rounded-lg w-1/2 my-3">
            <div className="relative">
                <p className="text-yellow-100 relative">{task.content}</p>
                    <button className="text-red-600 cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-1 text-3xl" onClick={() => removeTask(task.id)}>X</button>
            </div>
        </div>
    )
}

export default Show