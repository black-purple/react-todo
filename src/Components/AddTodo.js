import { useState } from "react";

const AddTodo = ({set}) => {
    const [todo, setTodo] = useState([]);
    const addTodo = () => {
        if (todo !== ""){
            let saved = JSON.parse(localStorage.todos);
            saved.push({body: todo});
            set(saved);
            localStorage.todos = JSON.stringify(saved);
        }
    }

    return (
        <form className="add-todo-form">
            <textarea value={todo} onChange={e => setTodo(e.target.value)} placeholder={"Type your task here"} required></textarea>
            <button type="button" onClick={addTodo}>Add Todo</button>
        </form>
    );
}

export default AddTodo;