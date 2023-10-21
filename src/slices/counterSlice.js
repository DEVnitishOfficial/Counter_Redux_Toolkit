
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter',
    initialState :0,
    reducers : {
        increment : (state) => {
           return state + 1
        },
        decrement : (state) => {
          return  state - 1
        }
    },
});

export const {increment,decrement}  = counterSlice.actions
export default counterSlice.reducer; // here we are exporting reducer(without s) insted of reducers(with s) because createSlice create a functon named reducer in which all the ruducers are combined and send which will used in the redux store.