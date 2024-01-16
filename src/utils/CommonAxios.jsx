import axios from "axios";
import { DOMAIN } from "./common";

const CommonAxios = {
  testAxios: async (controller, path, variable, data) => {
    return await axios.get(
      DOMAIN + `/${controller}/${path}/${variable}=${data}`
    );
  },
};
