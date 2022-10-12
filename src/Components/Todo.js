import { useState } from "react";

const Todo = ({ body }) => {
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