
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import TodoDetails from "./Components/TodoDetails.jsx";
import Store from "./Components/Slice/Store.js";

function App() {

  const exampleTodo = {
    title: "Samplo Todo",
    userId: 1,
  }
  return (
    <BrowserRouter Store={Store}>
    <Routes>
      <Route path="/userid" element={<TodoDetails todo={exampleTodo} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

