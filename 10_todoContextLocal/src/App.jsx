import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {

  // state to manage all todo tasks
  const [todos, setTodos] = useState([]);

  // Add new task
  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  // Edit task
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // Delete task
  const deleteTodo = (id) => {
    setTodos((prev) => 
      prev.filter((prevTodo) => prevTodo.id !== id)
    );
  };

  // Toggle task complete status
  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)
      )
    )
  }

  // useEffect to fetch todos from localStorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodos(todos)
    }
  }, [])

  // useEffect to set todos in localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#023047] min-h-screen py-8">
        <div className="w-full max-w-2xl bg-[#219EBC] mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
