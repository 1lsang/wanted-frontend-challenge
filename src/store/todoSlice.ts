import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

export interface ToDo {
  id: string;
  text: string;
  completed: boolean;
}

const initialState: ToDo[] = [];

const todoSlice = createSlice({
  name: 'ToDo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: v4(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
