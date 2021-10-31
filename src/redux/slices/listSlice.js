import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: 'list',
    initialState: {
      list:null,
      chevron:null,
      showInfo:false
    },
    reducers: {
      setList: (state,action) => {
     
        state.list = action.payload
      },
      setChevron:(state,action) => {
          state.chevron = action.payload
      },
      setShowInfo:(state,action) => {
        state.showInfo = action.payload
    }
    },
  })
  
  export const { setList,setChevron,setShowInfo } = listSlice.actions
  
  export default listSlice.reducer