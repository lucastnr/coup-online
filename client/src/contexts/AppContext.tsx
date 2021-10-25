import React, { createContext, useEffect, useState } from "react";
import socket from "../services/socket";
import { IAppContext } from "../services/types";

const AppContext = createContext({} as IAppContext);

export const AppProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [playerCount, setPlayerCount] = useState<number>();

  const userReceived = (userData: object) => {
    setUser(userData);
  }
  const updatePlayerCount = (playerCount: number) => {
    setPlayerCount(playerCount);
  }

  useEffect(() => {
    socket.on("userData", userReceived);
    socket.on("playerCount", updatePlayerCount);
  }, [])
  
  const context: IAppContext = {
    user,
    socket,
    signed: !!socket.connected && !!user,
    playerCount: playerCount
  }

  console.log(context);

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;