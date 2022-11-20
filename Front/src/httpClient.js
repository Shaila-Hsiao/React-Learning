import axios from "axios";
import https from "https";

export default axios.create({
  withCredentials: true,
  httpsAgent: new https.Agent({ keepAlive: true })
});
