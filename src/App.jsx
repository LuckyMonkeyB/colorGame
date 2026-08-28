import { useState } from 'react';
import './App.css';
import ColorForm from '../components/ColorForm';
import DisplayColor from './components/DisplayColor'


function App() {

  return (
    <>
      <h1>Color Game</h1>
      <ColorForm/>
      <DisplayColor/>
    </>
  )
}

export default App
