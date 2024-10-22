import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setcounter]=useState(15)         //useState is hook which is used to ui update ,let keyword is used to declare kuki const phir update nhi hoti

//  let counter=15
 const addvalue=()=>{
  console.log("Clicked",counter)
  // counter=counter+1
  if(counter<=19){
   setcounter(counter+1)                               // setcounter ki jagah eshacounter namm ka function bhi lesakte the kaam kya kr rha h wo matter krta h
  }else{
    console.log("counter cannot be greater than 20")
  }
 
  }

 const removevalue=()=>{
  if(counter>0){
  setcounter(counter-1)}
  else{
    console.log("counter cannot be negative")
  }
 }
  return (
    <>
      <h1> Chai aur code</h1>
      <h2> Counter Value:{counter}</h2>
     
      <button
      onClick={addvalue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
