import React, { createContext, useEffect, useState } from "react";
import socket from "../services/socket";
import { IAppContext } from "../services/types";

const AppContext = createContext({} as IAppContext);

export const AppProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  const userReceived = (userData: any) => {
    console.log(userData);
  }

  useEffect(() => {
    socket.on("user", userReceived);
  }, [])
  
  const context = {
    user,
    socket,
    signed: !!user
  }
  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;