import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)

 let myarr={
    name:"esha",
    age: 21

  }

  let myar=[1,2,3]
  return (
    <>
     <h1  className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card username="Chai or code" sameobj= {myarr} />
     <Card username="Chai or code" Samearr={myar}/>
     
   </>
  )
}

export default App
