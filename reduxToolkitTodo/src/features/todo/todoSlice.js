import { createSlice, nanoid } from "@reduxjs/toolkit";

// Maintains initial state
const initialState = {
    todos: [
        {id: 1, text: "Hello world!!"}
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // every reducer function takes two arguments--(state , action) 
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

// Individually exported because they will be of use in components
export const {addTodo, removeTodo} = todoSlice.actions


// To provide functions to store so that it can update state using these functions only
export default todoSlice.reducer