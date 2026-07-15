import { useState } from "react"
import {useDispatch } from 'react-redux';
import {addTodo} from '../fetatures/todo/todoSlice'

export default function AddTodo(){


  const [text,setText]=useState("");
  const dispatch=useDispatch();
  const addTodoHandler=(e)=>{
    e.preventDefault()
    dispatch(addTodo(text))
  }


  return(
    <>
<div className="max-w-xl mx-auto mt-10">
      <form
        onSubmit={addTodoHandler}
        className="flex gap-3 bg-white p-4 rounded-xl shadow-md"
      >
        <input
          type="text"
          placeholder="Enter your todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>
    </div>
    </>
  )
}