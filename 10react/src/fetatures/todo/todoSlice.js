
import { createSlice,nanoid } from "@reduxjs/toolkit";


//initial values for the todo functionalty 
const initialState={
  todos:[{id:1,text:"hello world"}] 
}

export const todoSlice=createSlice({
  name:'todo',                          //1.first value is alwase the name. Gives the slice a name.
  initialState,                         //2.initial values
  reducers:{                            //3.reducer. Functions(method) to update data. it has the propety(AddTodo) and function 
    //here addtodo is the function later we store the data through this dispatch(addTodo("Buy Milk")); and this data come in the payload
    addTodo:(state,action)=>{          //you have alwayse state and action. state = current value. action is actual value we need this like buy ,milk we need this
      const todo={
        id:nanoid(),
        text:action.payload
      }
      state.todos.push(todo)              //This adds the new todo to the todos array.
    },             

    removeTodo:(state,action)=>{
      state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
    },

    updateTodo:(state,action)=>{
     const {text}=action.payload;
     
     const todo=state.todos.find((todo)=>todo.text === id)
     
     if(todo){
      todo.text=text;
     }
    }
  }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions                //todoslice.action for 

export default todoSlice.reducer

/*

What createSlice() does behind the scenes
It automatically creates two things from each reducer:

Your reducer 
     │
     ▼
addTodo(state, action)
     │
     ├── Creates an action creator
     │      todoSlice.actions.addTodo
     │
     └── Adds the reducer to
            todoSlice.reducer

addTodo is a reducer function, but createSlice() automatically creates an action creator with the same name.

*/