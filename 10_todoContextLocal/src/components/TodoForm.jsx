import React, { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {

    // state for individual todo item (task)
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    // Method to call addTodo method from App.jsx
    const add = (e) => {
        e.preventDefault()

        if(!todo) return
        addTodo({id: Date.now(), todo: todo, completed: false})
        setTodo("")
    }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 text-black py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-[#FB8500] text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
