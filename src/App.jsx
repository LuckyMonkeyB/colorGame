import { useState } from 'react';
import './App.css';
import ColorForm from '../components/ColorForm';
import DisplayColor from './components/DisplayColor'
import Timer from '../components/Timer';

function App() {

  return (
    <>
      <h1>Color Game</h1>
      <ColorForm/>
      <DisplayColor/>
      <Timer/>
    </>
  )
}

export default App
