import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: 'list',
    initialState: {
      list:null,
      chevron:null
    },
    reducers: {
      setList: (state,action) => {
     
        state.list = action.payload
      },
      setChevron:(state,action) => {
          state.chevron = action.payload
      }
   
    },
  })
  
  export const { setList,setChevron } = listSlice.actions
  
  export default listSlice.reducer