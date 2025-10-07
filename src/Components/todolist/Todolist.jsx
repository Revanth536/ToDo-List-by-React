import React from "react"
import ToDoitem from "../todoItem/todoitem"


const ToDoList = ({task, toggle, del,edit}) => {
    return (
        <>
            <ul>
                {task.map((task) => (<ToDoitem
                    key={task.id}
                    task={task}
                    del={del}
                    toggle={toggle}
                    edit={edit}
                />))}
            </ul>
            
        </>
    )
}

export default ToDoList