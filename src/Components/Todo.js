import {useState} from "react";

/* const Todo = ({ body }) => {
    const [done, setDone] = useState(false);
    
    const doneToggle = () => { 
        setDone(!done);
    }

    return (
        <div className="todo" onClick={doneToggle}>
            <input type="checkbox" checked={done} onChange={doneToggle} />
            {done ? <del onClick={doneToggle}>{body}</del> : <h4 onClick={doneToggle}>{body}</h4>}
        </div>
    );
}

export default Todo;
 */

function Todo({id, description}) {
    const [done, setDone] = useState(false);

    return (
        <div className="todo">
            <input id={id} name="description" type="checkbox" onChange={() => setDone(!done)}/>
            <label htmlFor={id}>
                {done && <del>{description}</del>}
                {!done && <span>{description}</span>}
            </label>
        </div>)
}

export default Todo;