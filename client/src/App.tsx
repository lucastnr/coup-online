import React, { useEffect } from 'react';
import { useGlobal } from 'reactn';
import { globalInitial } from './services/constants';
import { IGlobalInitial } from './services/types';

function App() {
  const [{ io }, setGlobal ] = useGlobal<IGlobalInitial>();
  
  const initialize = () => {
    const { io } = globalInitial;
    io.connect();

    io.emit("test");
    
    setGlobal(globalInitial);
  }
  useEffect(initialize, [setGlobal]);
  return (
    <div>
    </div>
  );
}

export default App;
