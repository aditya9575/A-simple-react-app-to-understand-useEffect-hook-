import './App.css';
import { useEffect,useState } from "react"

function App() {

  const [num, setNum] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect( ()=>{
alert("I'm Clicked 🫵")
  },[sum])

  return (
    <div className="app">
      <h1>useEffect demonstration app ! </h1>
      <br /> <br />
      <button onClick={()=> {setNum(num +1)}}> Click me for num {num} </button>
      <br /><br />
      <button onClick={()=> {setSum(sum+1)}}> Click me for sum {sum}</button>
    </div>
  );
}

export default App;
