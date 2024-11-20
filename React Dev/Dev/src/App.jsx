import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="sg">
      <h1>Imagene</h1>
      <Form.Control size="lg" type="text" placeholder="Key in Game Code" />
      
      <Button variant="primary" id="join-game">Join Game</Button>
    </div>
  )
}

export default App
