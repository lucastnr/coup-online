import React, { createContext, useEffect, useState } from "react";
import socket from "../services/socket";
import { IAppContext } from "../services/types";

const AppContext = createContext({} as IAppContext);

export const AppProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  const userReceived = (userData: any) => {
    console.log("userData");
    console.log(userData);
  }

  useEffect(() => {
    socket.on("userData", userReceived);
  }, [])
  
  const context = {
    user,
    socket,
    signed: !!socket.connected && !!user
  }
  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;