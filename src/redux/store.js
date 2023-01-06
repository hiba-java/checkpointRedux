
import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import  taskReducer  from "./TaskSlice"

export const store = configureStore ({
 reducer :{
    task: taskReducer
 } ,
})

export default store
