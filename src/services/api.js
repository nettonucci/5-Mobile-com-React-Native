import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default api;
/**
 * IOS com Emulador: localhost
 * IOS com Fisico: IP da máquina
 * Android com Emulador: localhost (adb revrese)
 * Android com Emulador 10.0.2.2 (Android Studio)
 * Android com emulador 10.0.3.2 (Genymotion)
 * Android com Fisico IP da máquina
 */
