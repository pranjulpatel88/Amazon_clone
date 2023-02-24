
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState :[],
    reducers:{
        add(state, action){
           // return[...state, action.payload]
             console.log(action)
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter((prod)=>{return prod.id !== action.payload})
        },
        removeAll(state){
     state.splice(0, state.length)
                
              }
        
    },
    // extraReducers: (builder) => {
    //     builder
    //       .addCase(removeAll, (state) => {
    //         state.set([])
    //       })
     //}
})
export const {add, remove, removeAll} = cartSlice.actions;
export default cartSlice.reducer;