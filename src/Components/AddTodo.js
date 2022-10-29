import {useRef, useState} from "react";
import { getSaved, getSavedAndAdd, deleteAll } from "../utils";

/*
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
} */

// TODO: USE REACT HOOK FORM
function EditTodo({addTodoHandler, clearHandler}) {
    const descriptionRef = useRef(null);

    const onAddTodo = (event) => {
        event.preventDefault();
        const data = { description: descriptionRef.current.value };
        addTodoHandler(data);
        descriptionRef.current.value = "";
    }
    return (
        <>
            <form onSubmit={onAddTodo} className="add-todo-form">
                <textarea
                    id="description"
                    name="description"
                    ref={descriptionRef}
                    placeholder="Type your task here"
                    onChange={({target}) => descriptionRef.current.value = target.value}
                    required >
                </textarea>
                <button type="submit" onClick={onAddTodo}>Add Todo</button>
                <button type="button" onClick={clearHandler}>Clear</button>
                {/*<button type="button" onClick={() => getSaved(setTD)} className="green">Get Saved Todos</button>
                <button type="button" onClick={() => deleteAll(setTD)} className="red">Delete All Todos</button>*/}
            </form>
        </>
    )
}

export default EditTodo;


// IMP1 use REF HOOK