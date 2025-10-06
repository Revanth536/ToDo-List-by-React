import React from "react"
const TodoItem = ({ task, del, toggle }) => {
    return (
        <>
            <li style={{ textDecoration: task.completed ? "Line-through " : "none" }}>
                {task.input}
                <button onClick={() => toggle(task.id)}>{" "}{ task.completed?"Undo":"Complete"}</button>
                <button onClick={()=>del(task.id)}>Delete</button>
            </li>
            
        </>
    )
}
export default TodoItem