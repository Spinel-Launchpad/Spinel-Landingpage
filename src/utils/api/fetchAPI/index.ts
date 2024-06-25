import ConfigureAxios from "./fetchApi";
// import { store } from "~/store/store";

const axiosConfig = new ConfigureAxios({
  configure: {
    method: "GET",
    baseURL: "https://nft-presale.spinel.finance/api",
    // baseURL: "http://18.139.115.33:6869",


    timeout: 30000,
  },
  setAccessToken() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // const auth = store.getState().auth;
    return "";
    // return `Bearer ${auth. ?? ""}`;
  },
  setRefreshToken() {
    return "";
  },
});

const fetchAPI = axiosConfig.create();

axiosConfig.accessToken({
  setCondition(config) {
    return config?.url?.search(/^http/g) === -1;
  },
});

export default fetchAPI;
