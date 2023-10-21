import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement} from './slices/counterSlice'
import './App.css'

function App() {

  const counter = useSelector((state) => state.counterxx)
  console.log('counter',counter)
  const dispatch = useDispatch();

  return (
    <div className='text-3xl justify-center items-center text-center mt-[200px] '>
      <h1 className='border-2 border-green-500 w-52 ml-[650px] mb-10 p-2'>Counter : {counter}</h1>
      <button className='border-2 border-yellow-400 p-2 m-2' onClick={() => dispatch(increment())}>Increment</button>
      <button className='border-2 border-yellow-400 p-2 m-2' onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
