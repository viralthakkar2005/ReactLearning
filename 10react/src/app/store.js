import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../fetatures/todo/todoSlice';

export const store=configureStore({
  reducer:{
    todo:todoReducer
  }
})