
import { useEffect, useState } from "react";
import ToDoList from "../todolist/todolist";


const Local="react-todo-app.tasks"
export const TodoApp = () => {
 
    const [task, setTask] = useState(() => {
        const storeedTask = localStorage.getItem(Local);
        return storeedTask ? JSON.parse(storeedTask)
            : []
    });
    const [input, setInput] = useState("");
    useEffect(() => {
        localStorage.setItem(Local, JSON.stringify(task))
    },[task])
    
    const addToDo = () => {
        if (input.trim()) {
            setTask([...task, { id: Date.now(), input, completed: false }]);
            setInput("");
        }
    };

    const del = (id) => {
        // Corrected setTast to setTask
        setTask(task.filter((t) => t.id !== id));
    };
    
    const toggle = (id) => { 
        setTask(task.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
    };
    
    const edit = (id,newText) =>{
       setTask(task.map((t)=>t.id?{...t,input: newText }:t))
   }
    return (
        <>
            <h1>TooDo App</h1>
            <input 
                type="text" 
                class="placeholder col-6 " 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            
            <button type="button" class="btn btn-success" onClick={addToDo}>Add Task</button>
           
            <ToDoList
                task={task}
                del={del}
                toggle={toggle} 
                edit={edit}
            />
        </>
    );
};