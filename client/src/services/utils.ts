import { Enviroment } from "./types";

const productionSocketUrl = "";
const devSocketUrl = "http://localhost:1234/";

export const getSocketUrl = (enviroment: Enviroment) =>
  enviroment === "production" ? productionSocketUrl : devSocketUrl;