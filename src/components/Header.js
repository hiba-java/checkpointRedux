import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/TaskSlice'

function Header() {
const [newTask,setNewTask] = useState ({title:""})
const dispatch = useDispatch()
    return (
    <div className="Heed">
      <input  value = {newTask.title} type="text" placeholder="put your task ..." onChange={(e)=>setNewTask({...newTask,title:e.target.value})}/> 
      <button onClick={()=> {dispatch(addTask({...newTask,isDone:true,id:Math.floor(Math.random()*100000)})) 
      setNewTask({title:""})}} > Add Task</button>
    </div>
  )
}

export default Header
