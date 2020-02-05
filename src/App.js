import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SobreMim from './components/SobreMim/SobreMim';
import Habilidades from './components/Habilidades/Habilidades';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <SobreMim></SobreMim>
      <Habilidades></Habilidades>
    </>
  );
}

export default App;
