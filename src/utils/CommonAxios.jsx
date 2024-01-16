import axios from "axios";
import { MASTOCK_DOMAIN } from "./Common";

const CommonAxios = {
  testAxios: async (controller, path, variable, data) => {
    return await axios.get(
      DOMAIN + `/${controller}/${path}/${variable}=${data}`
    );
  },
};
