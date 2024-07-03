import { createSlice, nanoid } from "@reduxjs/toolkit";

//initially what we want to write in store like sbse pehle kia ana chahye
const initialState = {
todos: [{id: 1,
    text: "Hania"
}]
}

//reducer is functionaliyu
//slice reducer ka bara version hai

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer



