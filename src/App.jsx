import { useState } from 'react';
import './App.css';
import ColorForm from '../components/ColorForm';
import Timer from '../components/Timer';

function App() {

  return (
    <>
      <h1>Color Game</h1>
      <ColorForm/>
      <Timer/>
    </>
  )
}

export default App
