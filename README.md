# A-simple-react-app-to-understand-useEffect-hook-

To run the app clone the master branch and then go to the file path and run npm run start 

STEPS TO UNDERSTAND ----> 

firstly create & setup the react app 

now in the app.js import useEffect hook and useState hook-> import { useEffect,useState } from "react"


[note - useEffect hook is normally rendered everytime we reload or if in case any other rendering is done so inorder to preventy this
we add an empty array as the 2nd argument to the useEffect hook whih makes it render only one time .
In short after everytime our render function is triggered we make call useEffect hook to tell what action has to be performed inside 
the component]



Now we make a simple application of having a button with 0 as initial value and then after on clicking the button the value gets 
incremented by 1 so for it make use of a basic useState hook 

i.e -> 
import './App.css';
import { useEffect,useState } from "react"

function App() {

  const [num, setNum] = useState(0);


  return (
    <div className="app">
      <h1>useEffect demonstration app ! </h1>
      <br /> <br />
      <button onClick={()=> {setNum(num +1)}}> Click me {num} </button>
    </div>
  );
}

export default App;



now after having this -> as we know that useEffect always gets in action after something is rendered till we don't specify the empty
array so 
Now inorder to demonstrate this thing of useEffect hook we desire to get an alert everytime the button is clicked and to do so we can 
simply call ---> useEffect hook and render an alert of i'm clicked inside it 

i.e -> example -> useEffect( ()=>{
                                   alert("I'm Clicked 🫵")
                                 })

Now everytime the page reloads or the button gets clicked firstly we will get a message that I'm Clicked 🫵   

Now if we want our useEffect to be triggered only when the page is refreshed we add an empty array as the second argument []

i.e -> example -> useEffect( ()=>{
                                   alert("I'm Clicked 🫵")
                                 },[])

Now till here useEffect hook will only get triggered when the page is reloaded and not when the button is clicked . 


===============================*********************************=================================
But if we want our useEffect hook to be triggered only on click of one button and not the another one if any in short we desire
conditional rendering --> In That Case we 

simply inside the empty array we can pass the value of the variable we want out hook to be rendered for 

i.e-> 
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


Here we have 2 buttons one for num and one for sum and we want our useEffect to only be triggered when we tap on the sum button 
so we simply passed in the sum variable inside the empty array of useEffect , which made sure that now the useEffect is triggered only 
when we tap onto the sum button 

