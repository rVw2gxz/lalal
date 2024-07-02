import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrap'>
        <div className='box flex1'>
          <ul>
            <li>
              <a href="">1</a>
              <span>Привет мир</span>
            </li>
            <li>
              <a href="">2 </a>
              <span>Привет мир</span>
            </li>
            <li>
              <a href="">3</a>
              <span>Привет мир</span>
            </li>
            <li>
              <a href="">4</a>
              <span>Привет мир</span>
            </li>
            <li>
              <a href="">5</a>
              <span>Привет мир</span>
            </li>
          </ul>
        </div>
       
    </div>
  )
}

export default App
