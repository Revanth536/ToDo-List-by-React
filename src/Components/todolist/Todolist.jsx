import React from "react"
import ToDoitem from "../todoItem/todoitem"


const ToDoList = ({task, toggle, del}) => {
    return (
        <>
            <ul>
                {task.map((task) => (<ToDoitem key={task.id} task={task } del={del } toggle={toggle} />))}
            </ul>
            
        </>
    )
}

export default ToDoList