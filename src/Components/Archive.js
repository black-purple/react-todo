import Todo from "./Todo";

const Archive = ({ archived }) => {
    return (
        <div className="archived">
            <h2>Done</h2>
            {archived.map((todo) => {
                return <Todo body={todo.body} key={todo.id} />;
            })}
        </div>);
}

export default Archive;