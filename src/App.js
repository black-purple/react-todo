import Todos from "./Components/Todos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Archive from "./Components/Archive";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
