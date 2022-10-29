import Todos from "./Components/Todos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Archive from "./Components/Archive";
import AddTodo from "./Components/AddTodo";
import Alert from "./Components/Alert";
import {useEffect, useRef, useState} from "react";
import EditTodo from "./Components/AddTodo";
import todo from "./Components/Todo";


/* function App() {
  const [todos, setTodos] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const updateTodos = (id, newStatus, setTD) => {
    let allTodos = todos;
    allTodos = allTodos.map(todo => {
      if (todo.id === id) todo.status = newStatus;
      return todo;
    });
    setTD(allTodos);
  }

  return (
    <div className="App">
      <Header />
      <AddTodo setTD={setTodos} setSA={setShowAlert} />
      <div className="body">
        <Todos todoList={todos} setTD={setTodos} updateTD={updateTodos}/>
        <Archive archived={todos} setTD={setTodos} updateTD={updateTodos}/>
      </div>
      {showAlert && <Alert />}
      <Footer />
    </div>
  );
}

export default App;
*/
const todosKey = "TODOS_KEY";
const idSequenceKey = "ID_SEQUENCE_KEY";

// TODO: add a spinner
// TODO: add react router
function App() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const todosList = JSON.parse(localStorage.getItem(todosKey));
        if (todosList) {
            setTodos(todosList);
        }
    }, []);


    const sequenceIdRef = useRef(0);
    useEffect(() => {
        const sequenceId = +localStorage.getItem(idSequenceKey);
        if (sequenceId) {
            sequenceIdRef.current.value = sequenceId;
        } else {
            localStorage.setItem(idSequenceKey, JSON.stringify(sequenceIdRef.current));
        }
    }, []);

    const onAddTodoHandler = (todoItem) => {
        sequenceIdRef.current = sequenceIdRef.current + 1;
        localStorage.setItem(idSequenceKey, `${sequenceIdRef.current}`);
        const newTodosList = [...todos, {id: sequenceIdRef.current, description: todoItem.description}];
        setTodos(newTodosList)
        localStorage.setItem(todosKey, JSON.stringify(newTodosList));
    }

    const onClearHandler = () => {
        localStorage.clear();
        setTodos([]);
    }

    return (
        <div className="App">
            <EditTodo addTodoHandler={onAddTodoHandler} clearHandler={onClearHandler}/>
            <Todos todosList={todos}/>
        </div>)
}

export default App;

// imp 2 use effect