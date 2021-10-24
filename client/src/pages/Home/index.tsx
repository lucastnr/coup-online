import React, { useEffect } from 'react';
import socket from "../../services/socket";

const initializeListeners = () => {
  socket.connect();
  socket.send("teste");
}

function Home() {
  useEffect(initializeListeners, []);

  return (
    <div>
    </div>
  );
}

export default Home;
