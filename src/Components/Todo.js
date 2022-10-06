import { useState } from "react";

const Todo = ({body}) => {
    const [done, setDone] = useState(false);

    const makeDone = () => setDone(true);
    const makeUndone = () => setDone(false);

    const doneToggle = () => {
        done ? makeUndone() : makeDone();
    }

    return (
        <div className="todo" onClick={doneToggle}>
            { 
            done 
            ? <input type="checkbox" checked onClick={doneToggle} /> 
            : <input type="checkbox" onClick={doneToggle} />
            }
            <h4 onClick={doneToggle}>{body}</h4>
        </div>
    );
}
 
export default Todo;