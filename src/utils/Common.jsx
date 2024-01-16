import axios from "axios";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

export const MARSTOCK_DOMAIN = "http://localhost:8111";

const Common = {
   // accessToken
   setAccessToken: (accessToken) => {
   return window.localStorage.setItem("accessToken", accessToken);
   },
   getAccessToken: () => {
      return window.localStorage.getItem("accessToken");
   },
   // refreshToken
   setRefreshToken: (refreshToken) => {
      return window.localStorage.setItem("refreshToken", refreshToken);
   },
   getRefreshToken: () => {
      return window.localStorage.getItem("refreshToken");
   },

};

export default Common;