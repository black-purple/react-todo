import Todos from "./Components/Todos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Archive from "./Components/Archive";
import AddTodo from "./Components/AddTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Header />
      <AddTodo set={setTodos}/>
      <div className="body">
          <Todos todoList={todos}/>
          <Archive/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
