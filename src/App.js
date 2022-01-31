import { useSelector ,useDispatch} from 'react-redux';
import './App.css';
import {incNumber,decNumber} from './actions/index'


function App() {
const  myState = useSelector((state)=>state.changeNumber) 
const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
   
   <h1>React Redux Counter Application</h1>
   <h4> Faryad Azim </h4>

<span> <button onClick={()=>{dispatch(incNumber())
console.log('hello');}}> - </button>
 <input style={{textAlign:'center'}} type="text" className="form-control" value={myState} /> 
 <a href="/"> + </a></span>
 
 
  
 </header>
    </div>
  );
}

export default App;
