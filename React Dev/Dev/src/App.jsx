import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Starting() {
  const [count, setCount] = useState(0)
  document.body.style='background: #006ED3;';

  return (
    <div className="sg">
      <h1>Imagene</h1>
      <Form.Control size="lg" id="game" type="text" placeholder="Key in Game Code!" />
      <br />
      <Button variant="primary" id="join-game">Join Game!</Button>
    </div>
  )
}

function AddName() {
  return (
    <div classname="name">
      <h1>Imagene</h1>
      <Form.Control size="lg" id="game" type="text" placeholder="Key in your name!" />
      <br />
      <Button variant="primary" id="join-game">Continue!</Button>
    </div>
  )
}

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Starting />} /> 
        <Route path="/additional" element={<AddName />} />
      </Routes>
    </Router>
  )
}

export default App
