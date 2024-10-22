import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function Myapp(){
  return (
      <div>
            <h1> Custom App |Esha</h1>
      </div>
  )
}
const anothervariable="yha hi ek variable leke dekh le rhi hu"
const reactelement=React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  anothervariable

)
createRoot(document.getElementById('root')).render(
  // <StrictMode>  
    // <App />
    // <Myapp/>
    reactelement
  
  // </StrictMode>,
) 
