import { useSelector,useDispatch } from 'react-redux';
import { IncCouter,DecCounter } from './action';
import './App.css';

function App() {

  const counter = useSelector(state => state.ChangeCounter)

  const dispatch = useDispatch();

  const decCounter = ()=>{
    dispatch(DecCounter());
  }

  return (
    <div className="App">
      <h1> Counter Application </h1>

      <br/><br/>

      <h1> {counter} </h1>

      <button onClick={decCounter}> - </button>

      <button onClick={()=>{ dispatch(IncCouter())}}> + </button>
      
    </div>
  );
}

export default App;
