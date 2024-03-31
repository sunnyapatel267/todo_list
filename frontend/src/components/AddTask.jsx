const AddTask = ({ addTask, newTask, changeOnTask }) => {
    return (
        <div className="text-yellow-100">
            <form onSubmit={addTask} className="flex items-center">
                <div>
                    <input 
                        className= "bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-yellow-100 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What are your tasks for today?"
                        value = {newTask} onChange={changeOnTask}
                    />
                </div>
                <button className="middle none center rounded-lg bg-green-600 py-3 px-6 font-sans text-xs font-bold uppercase text-yellow-100 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-9" type='submit'>add</button>
            </form>
        </div>
    )
}

export default AddTask