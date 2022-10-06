import Todo from "./Todo";

const Todos = () => {
    let todoList = [
        <Todo body="todo 1" key="1" />,
        <Todo body="todo 2" key="2" />,
        <Todo body="todo 3" key="3" />,
        <Todo body="todo 4" key="4" />,
        <Todo body="todo 5" key="5" />
    ];
    return (
        <div className="todos">
            {todoList.map((body) => {
                return body;
            })}
        </div>
    );
}

export default Todos;