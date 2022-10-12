import Todos from "./Components/Todos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Archive from "./Components/Archive";
import AddTodo from "./Components/AddTodo";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
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
