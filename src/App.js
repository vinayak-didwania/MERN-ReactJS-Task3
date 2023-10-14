import React, { useState } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'black', 'magenta', 'cyan'];

  // Callback function to set the background color
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} onSelectColor={changeBackgroundColor} />
    </div>
  );
}

export default App;
