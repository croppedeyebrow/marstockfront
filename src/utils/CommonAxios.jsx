import axios from "axios";
import { MARSTOCK_DOMAIN } from "./Common";

const CommonAxios = {
  getAxios: async (controller, path, variable, data) => {
    return await axios.get(
      MARSTOCK_DOMAIN + `/${controller}/${path}/${variable}=${data}`
    );
  },

  postAxios: async (controller, path, object) => {
    return await axios.post(MARSTOCK_DOMAIN + `/${controller}/${path}`, object);
  },
};

export default CommonAxios;
