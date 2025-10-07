import React, { useState } from "react"
const TodoItem = ({ task, del, toggle,edit }) => {
    const [isEdit, setEdit] = useState(false)
    const [editxt, setEdittxt] = useState(task.input)
    
    const EditToogle = () =>{
        if (isEdit)
            edit(task.id, editxt)
        else
            setEdit(task.input)
        setEdit(!isEdit)
    }

    return (
        <>
            
            <ul className="list-group">
                <li>   
                    <input type="text"
                        value={editxt}
                        onChange={(e) => setEdittxt(e.target.value)}
                    />
                    {/* <span style={{ textDecoration: task.completed ? "line-through" : "none", flexGrow: 1 }}>
                        {task.input}
                    </span> */}
                <button type="button" className="btn btn-primary" onClick={EditToogle}>{isEdit ? "Save" : "Edit"}</button>
                <button type="button" className="btn btn-primary"onClick={() => toggle(task.id)}>{" "}{ task.completed?"Undo":"Complete"}</button>      
                <button type="button" className="btn btn-primary" onClick={() => del(task.id)}>Delete</button>
                    
                </li>
            </ul>
        </>
    )
}
export default TodoItem