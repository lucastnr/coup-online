import React, { createContext, useContext, useEffect, useState } from "react";
import socket from "../services/socket";
import { IAppContext } from "../services/types";
import { checkIsMobile } from "../services/utils";

const AppContext = createContext({} as IAppContext);

export const AppProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [playerCount, setPlayerCount] = useState<number>();
  const [isMobile, setIsMobile] = useState<boolean>(checkIsMobile());

  /** Lida com recebimento de usuário */
  const userReceived = (userData: object) =>
    setUser(userData);

  /** Atualiza contagem de jogadores */
  const updatePlayerCount = (playerCount: number) =>
    setPlayerCount(playerCount);

  /** Lida com estado de dispositivo */
  const handleCheckDevice = () => {
    const newIsMobile = checkIsMobile();
    newIsMobile != isMobile && setIsMobile(newIsMobile)
  }

  useEffect(() => {
    socket.on("userData", userReceived);
    socket.on("playerCount", updatePlayerCount);

    window.addEventListener("resize", handleCheckDevice)
  }, [])
  
  const context: IAppContext = {
    user,
    socket,
    signed: !!socket.connected && !!user,
    playerCount: playerCount,
    isMobile
  }

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () =>
  useContext(AppContext);

export default AppContext;