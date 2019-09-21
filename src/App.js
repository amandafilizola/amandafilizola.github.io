import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SobreMim from './components/SobreMim/SobreMim';
import Habilidades from './components/Habilidades/Habilidades';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <SobreMim></SobreMim>
      <Habilidades></Habilidades>
    </div>
  );
}

export default App;
