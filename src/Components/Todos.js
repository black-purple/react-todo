import Todo from "./Todo";

const Todos = ({todoList}) => {
    return (
        <div className="todos">
            {todoList.map((todo) => {
                return <Todo body={todo.body} key={todoList.indexOf(todo)}/>;
            })}
        </div>
    );
}

export default Todos;