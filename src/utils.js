let id = 0;
const uniqid = () => {
    return id++;
}
let allTodos = [];
const getSavedAndAdd = (setTD, todo) => {
    if (localStorage.todos !== undefined) {
        allTodos = JSON.parse(localStorage.todos);
        allTodos.push({ id: uniqid(), body: todo, status: false });
        setTD(allTodos);
        localStorage.todos = JSON.stringify(allTodos);
    } else {
        allTodos.push({ id: uniqid(), body: todo, status: false });
        setTD(allTodos);
        localStorage.todos = JSON.stringify(allTodos);
    }
}

const getSaved = (setTD) => {
    if (localStorage.todos !== undefined) {
        allTodos = JSON.parse(localStorage.todos);
        setTD(allTodos);
        localStorage.todos = JSON.stringify(allTodos);
    }
}

const deleteAll = (setTD) => {
    localStorage.removeItem("todos");
    setTD([]);
    allTodos = [];
}

module.exports = {
    getSaved,
    getSavedAndAdd,
    deleteAll,
    allTodos
}