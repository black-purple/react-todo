import { useState } from "react";
import { getSaved, getSavedAndAdd, deleteAll } from "../utils";

const AddTodo = ({ setTD, setSA }) => {
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        if (todo !== "") {
            setSA(false);
            getSavedAndAdd(setTD, todo);
            setTodo("");
        } else {
            setSA(true);
        }
    }

    return (
        <>
            <form className="add-todo-form">
                <textarea value={todo} onChange={e => setTodo(e.target.value)} placeholder={"Type your task here"} required></textarea>
                <button type="button" onClick={addTodo}>Add Todo</button>
                <button type="button" onClick={() => getSaved(setTD)} className="green">Get Saved Todos</button>
                <button type="button" onClick={() => deleteAll(setTD)} className="red">Delete All Todos</button>
            </form>
        </>
    );
}

export default AddTodo;