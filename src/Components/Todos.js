import Todo from "./Todo";

/* const Todos = ({ todoList }) => {
    return (
        <div className="todos">
            <h2>Todos</h2>
            {todoList.map((todo) => {
                return <Todo body={todo.body} key={todo.id} />;
            })}
        </div>
    );
}
*/

function Todos({todosList}) {

    return (<div className="todos">
        <h2>Todos</h2>
        {todosList && todosList.map((todo) => <Todo key={todo.id} id={todo.id} description={todo.description}/>)}
        {todosList.length === 0 && <div>EMPTY LIST</div>}
    </div>);
}

export default Todos;

