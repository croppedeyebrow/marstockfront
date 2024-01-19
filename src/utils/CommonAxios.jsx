import axios from "axios";
import { MASTOCK_DOMAIN } from "./Common";

const CommonAxios = {
  getAxios: async (controller, path, variable, data) => {
    return await axios.get(
      MASTOCK_DOMAIN + `/${controller}/${path}/${variable}=${data}`
    );
  },

  postAxios: async (controller, path, object) => {
    return await axios.post(MASTOCK_DOMAIN + `/${controller}/${path}`, object);
  },
};
