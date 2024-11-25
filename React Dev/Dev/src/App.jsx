import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

function App() {
  const [count, setCount] = useState(0)
  document.body.style='background: #006ED3;';

  return (
    <div className="sg">
      <h1>Imagene</h1>
      <Form.Control size="lg" id="game" type="text" placeholder="Key in Game Code" />
      <br />
      <Button variant="primary" id="join-game" onClick={}>Join Game</Button>
    </div>
  )
}

function joingame() {
  once done go to next page
}


export default App
