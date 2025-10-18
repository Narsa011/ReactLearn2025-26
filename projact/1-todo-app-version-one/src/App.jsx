import AppName from "./assets/camponant/AppName";
import TodoItem1 from "./assets/camponant/TodoItem1";
import TodoItem2 from "./assets/camponant/TodoItem2";
import TodoItem3 from "./assets/camponant/TodoItem3";
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <TodoItem1 />
        <div className="items-con">
          <TodoItem2 />
          <TodoItem3 />
        </div>
      </center>
    </>
  );
}

export default App;
