import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const checkedSlice = createSlice({
    name:"checked",
    initialState:{
        checked:false
    },

    reducers:{
        setCheck: (state,action) =>{
            state.checked=action.payload
        }
    }
})

export const {setCheck} = checkedSlice;;
export default checkedSlice.reducer;