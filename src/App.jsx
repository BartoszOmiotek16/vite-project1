import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div class="gora1">
    <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div class="gora2">
      <h1>Moja pierwsza strona REACT</h1>
    </div>
   
<div class="content">
    <div class="lewa">
    <h1>Bartosz Omiotek</h1>
      <h3>Gr:6, Nr indeksu: 113969</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      </div>


    <div class="prawa">
    <h1>Bartosz Omiotek</h1>
      <h3>Gr:6, Nr indeksu: 113969</h3>
      
      <img src='logo.png'/>

      </div>
      </div>
      <div class= "footer">
      
      <h3>Bartosz Omiotek Gr:6, Nr indeksu: 113969</h3> 
      
      
      </div>
      
      <p className="read-the-docs">
       
      </p>

    </>
  )
}

export default App
