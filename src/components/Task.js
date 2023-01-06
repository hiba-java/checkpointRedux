import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../redux/TaskSlice'

const Task = ({task}) => {
    const dispatch =useDispatch()
    const [update,setUpdate]= useState(false)
    const[taskEdit,setTaskEdit] =useState(task)
    
   
  return (
    <div>
        { update ? <> <input type ="text" defaultValue = {task.title} onChange = {(e)=>{setTaskEdit({...taskEdit,title:e.target.value} ); console.log(taskEdit)}}/>
         <button onClick ={()=> {dispatch(updateTask(taskEdit))}}>Confirm</button> 
         <button onClick ={()=>setUpdate(false)} >Cancel</button> 
        
        </> : 
        <>
        <h3>{task.title}</h3>
        <button onClick={()=>setUpdate(true)}>update</button><button onClick = {()=>dispatch(deleteTask(task))}>*</button>
        </>
      
  }
    </div>
  )
}

export default Task
