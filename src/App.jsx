import { useState } from 'react'
import Button from '@mui/material/Button';
import viteLogo from '/vite.svg'
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';

function App() {

  return (
    <>
      <Hero/>
      <About/>
      <Partners/>
    </>
  )
}

export default App
