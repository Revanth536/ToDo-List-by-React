// TodoApp.jsx - Corrected
import { useState } from "react";
// Assuming you created a TodoList.jsx file and export ToDoList
import ToDoList from "../todolist/todolist";

export const TodoApp = () => {
 
    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");
    
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
    
   
    return (
        <>
            <h1>TooDo App</h1>
            <input 
                type="text" 
                placeholder="Enter your text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button onClick={addToDo}>Add Task</button>
            {/* FIX D & C: Use ToDoList and pass 'toggle' prop correctly */}
            <ToDoList
                task={task}
                del={del}
                toggle={toggle} 
            />
        </>
    );
};