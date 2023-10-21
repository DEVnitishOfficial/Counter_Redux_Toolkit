import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './slices/counterSlice' // here we are importing counterReducer from the conterSlice but actually inside the counterSlice there is nothing like counterReducer then how it works?

// we are importing counterReducer because "createSlice" from Redux Toolkit generates a reducer function, and we can name it anything when you import it.  In the code, I used the name counterReducer to be consistent with common naming conventions.

const store = configureStore({
    reducer : { //Reducers are functions that define how the state should change in response to dispatched actions
    counterxx : counterReducer
     }
});
export default store;
// *****configure Store*******
//configureStore returns an instance of the Redux store with the specified configuration. This store can be used to dispatch actions, subscribe to changes in the state, and connect your React components to the Redux store.

// When you call configureStore, it creates a new, specific store object based on the configuration you provide. This store object is an "instance" of the Redux store and has its own state, reducer logic, and methods.

//Each time you call configureStore, it generates a new store instance. This means you can have multiple instances of the Redux store in your application, each with its own isolated state and behavior. These instances are independent of each other.

//The store instance provides methods and properties that allow you to interact with and manage the state, including dispatching actions, subscribing to state changes, and connecting React components to the store.