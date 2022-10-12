import Todo from "./Todo";

const Todos = ({ todoList }) => {
    return (
        <div className="todos">
            <h2>Todos</h2>
            {todoList.map((todo) => {
                return <Todo body={todo.body} key={todo.id} />;
            })}
        </div>
    );
}

export default Todos;