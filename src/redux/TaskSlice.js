import { createSlice } from '@reduxjs/toolkit'

const initialState = [
 { id :1,
   title :"Exemple1",
   isDone :false
},
{   id :2,
    title :"Exemple2",
    isDone :false
 }
]
export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask :(state,action)=>{
          state = state.push(action.payload)
    },
    deleteTask : (state,action) =>{
      return state.filter((el)=> el.id !== action.payload.id)
    },
    updateTask : (state,action) =>{
      return  state.map (el=> el.id === action.payload.id  ? action.payload : el)   }
  },
})

// Action creators are generated for each case reducer function
export const { addTask,deleteTask,updateTask} = taskSlice.actions

export default taskSlice.reducer