import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../features/counter/counterSlice'

const About = () => {
  const dispatch = useDispatch()
  const count = useSelector(state=>state.counter.value)
  
  



 const handleIncrement = () =>{
    dispatch(increment())
 }
 const handleDecrement = () =>{
    dispatch(decrement())
 }
  return (
    <div>
      <h1>Redux State Management - Persist State & Re-Hydration {count}</h1>
       <button className="btn btn-primary me-2" onClick={handleIncrement}>Increment</button>
       <button className="btn btn-secondary" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default About