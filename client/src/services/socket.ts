import io from 'socket.io-client';
import { getSocketUrl } from './utils';


const enviroment = process.env.NODE_ENV;
const socketUrl = getSocketUrl(enviroment);
const socket = io(socketUrl);

export default socket;