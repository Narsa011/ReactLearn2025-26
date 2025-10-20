import AppName from "./assets/camponant/AppName";
import TodoItem1 from "./assets/camponant/TodoItem1";
import TodoItems from "./assets/camponant/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2025",
    },
    {
      name: "Go to Collage",
      dueDate: "05/10/2025",
    },
    {
      name: "Going Park",
      dueDate: "06/10/2025",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <TodoItem1 />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
